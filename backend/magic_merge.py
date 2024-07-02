from geopy.distance import geodesic

# map1 = [
#     {
#         "name": "Place A",
#         "position": [-33.8688, 151.2093],
#         "googleMapsUrl": "https://goo.gl/maps/example1",
#         "addedBy": "Alice",
#         "transactions": []
#     },
#     {
#         "name": "Place B",
#         "position": [-33.8700, 151.2200],
#         "googleMapsUrl": "https://goo.gl/maps/example2",
#         "addedBy": "Alice",
#         "transactions": []
#     }
# ]

# map2 = [
#     {
#         "name": "Place C",
#         "position": [-33.8688, 151.2093],
#         "googleMapsUrl": "https://goo.gl/maps/example3",
#         "addedBy": "Bob",
#         "transactions": []
#     },
#     {
#         "name": "Place D",
#         "position": [-33.8650, 151.2150],
#         "googleMapsUrl": "https://goo.gl/maps/example4",
#         "addedBy": "Bob",
#         "transactions": []
#     }
# ]

def is_within_radius(center, point, radius_km):
    return geodesic(center, point).km <= radius_km

def merge_maps(map1, map2, center, radius_km):
    combined_places = {}
    
    for location in map1 + map2:
        position = tuple(location["position"])
        if position not in combined_places and is_within_radius(center, position, radius_km):
            combined_places[position] = location
    
    return list(combined_places.values())

def magic_merge(trip_name, requestor, url, new_location_center, radius_km, map1, map2):
    # new_location_center = [-33.8688, 151.2093]
    # radius_km = 5
    new_trip = merge_maps(map1, map2, new_location_center, radius_km)

    return {
        "name": trip_name,
        "position": new_location_center,
        "googleMapsUrl": url,
        "addedBy": requestor,
        "transactions": [],
        "places": new_trip
    }
