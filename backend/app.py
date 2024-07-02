from flask import Flask, request, jsonify
from flask_cors import CORS
from magic_merge import magic_merge
from ai_recommender import recommend_locations_rag
from db import get_user_maps, save_user_maps

app = Flask(__name__)
CORS(app)

@app.route('/merge_maps', methods=['POST'])
def merge_maps():
    data = request.json
    trip_name = data['trip_name']
    requestor = data['requestor']
    url = data['url']
    new_location_center = data['new_location_center']
    radius_km = data['radius_km']
    map1 = data['map1']
    map2 = data['map2']
    
    merged_trip = magic_merge(
        trip_name=trip_name,
        requestor=requestor,
        url=url,
        new_location_center=new_location_center,
        radius_km=radius_km,
        map1=map1,
        map2=map2
    )
    
    return jsonify(merged_trip)

@app.route('/recommend_locations', methods=['POST'])
def recommend():
    data = request.json
    map_data = data['map']
    radius_km = data.get('radius_km', 5)
    num_recommendations = data.get('num_recommendations', 10)
    
    recommendations = recommend_locations_rag(map_data, radius_km, num_recommendations)
    return jsonify(recommendations)

@app.route('/get_maps/<username>', methods=['GET'])
def get_maps(username):
    maps = get_user_maps(username)
    return jsonify(maps)

@app.route('/add_map/<username>', methods=['POST'])
def add_map(username):
    data = request.json
    map_name = data['map_name']
    map_data = data['map_data']
    
    maps = get_user_maps(username)
    maps[map_name] = map_data
    save_user_maps(username, maps)
    
    return jsonify({"message": "Map added successfully!"})

@app.route('/search_map/<username>/<map_name>', methods=['GET'])
def search_map(username, map_name):
    maps = get_user_maps(username)
    map_data = maps.get(map_name, None)
    if map_data:
        return jsonify(map_data)
    else:
        return jsonify({"message": "Map not found!"}), 404

if __name__ == '__main__':
    app.run(debug=True)