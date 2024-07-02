import openai
import requests
import os

GOOGLE_API_KEY = os.getenv('GOOGLE_API_KEY')
OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')

openai.api_key = OPENAI_API_KEY

def recommend_locations_rag(map_data, radius_km=5, num_recommendations=10):
    all_recommendations = []
    for location in map_data:
        similar_places = find_similar_places(location, radius_km * 1000)
        all_recommendations.extend(similar_places)
    
    unique_recommendations = {place['place_id']: place for place in all_recommendations}.values()
    recommendations = list(unique_recommendations)[:num_recommendations]
    
    recommendation_texts = []
    for place in recommendations:
        name = place.get('name', 'Unknown')
        vicinity = place.get('vicinity', 'Unknown location')
        recommendation_texts.append(f"{name} located at {vicinity}")

    input_text = "I have the following places and I want you to recommend similar places:\n"
    for location in map_data:
        input_text += f"{location['name']} located at {location['position'][0]}, {location['position'][1]}\n"

    input_text += "\nBased on these places, recommend 10 other places:\n"
    input_text += "\n".join(recommendation_texts)

    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=input_text,
        max_tokens=150
    )

    generated_text = response.choices[0].text.strip()
    generated_recommendations = generated_text.split("\n")

    recommendations_with_scores = []
    for rec in recommendations:
        name = rec.get('name', 'Unknown')
        score = 0.5
        for gen_rec in generated_recommendations:
            if name.lower() in gen_rec.lower():
                score = 1.0
                break
        recommendations_with_scores.append({
            "place": rec,
            "similarity_score": score
        })

    return recommendations_with_scores

def find_similar_places(location, radius_m):
    lat, lng = location["position"]
    url = f"https://maps.googleapis.com/maps/api/place/nearbysearch/json?location={lat},{lng}&radius={radius_m}&key={GOOGLE_API_KEY}"
    
    response = requests.get(url)
    if response.status_code == 200:
        places = response.json().get('results', [])
        return places
    else:
        return []
    
