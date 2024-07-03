from geopy.distance import geodesic
import random

def is_within_radius(center, point, radius_km):
    return geodesic(center, point).km <= radius_km + 10

def simple_merge_maps(map1, map2, center, radius_km):
    combined_places = {}
    
    for location in map1 + map2:
        position = tuple(location["position"])
        if position not in combined_places and is_within_radius(center, position, radius_km):
            combined_places[position] = location
    
    return list(combined_places.values())

def magic_merge(trip_name, requestor, url, new_location_center, radius_km, map1, map2):
    simple_merge = simple_merge_maps(map1, map2, new_location_center, radius_km)
    
    a_places = [place for place in simple_merge]
    b_places = [place for place in simple_merge]
    
    num_places = min(len(a_places), len(b_places))
    selected_places = random.sample(a_places, num_places) + random.sample(b_places, num_places)
    
    new_location = {
        "name": trip_name,
        "position": new_location_center,
        "googleMapsUrl": url,
        "addedBy": requestor,
        "transactions": [],
        "places": selected_places
    }
    
    return new_location

map1 = [
    {
        "name": "Place A",
        "position": [-33.8688, 151.2093],
        "googleMapsUrl": "https://goo.gl/maps/example1",
        "addedBy": "a",
        "transactions": []
    },
    {
        "name": "Place B",
        "position": [-33.8700, 151.2200],
        "googleMapsUrl": "https://goo.gl/maps/example2",
        "addedBy": "a",
        "transactions": []
    }
]

map2 = [
    {
        "name": "Place C",
        "position": [-33.8688, 151.2093],
        "googleMapsUrl": "https://goo.gl/maps/example3",
        "addedBy": "b",
        "transactions": []
    },
    {
        "name": "Place D",
        "position": [-33.8650, 151.2150],
        "googleMapsUrl": "https://goo.gl/maps/example4",
        "addedBy": "b",
        "transactions": []
    }
]

new_location_center = [-33.8688, 151.2093]
radius_km = 5

merged_trip = magic_merge(
    trip_name="Merged Trip",
    requestor="Automated Script",
    url="https://goo.gl/maps/newtrip",
    new_location_center=new_location_center,
    radius_km=radius_km,
    map1=map1,
    map2=map2
)

print(merged_trip)
