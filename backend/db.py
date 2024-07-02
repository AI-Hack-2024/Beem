import os
import json

DB_PATH = 'db'

def get_user_maps(username):
    filepath = os.path.join(DB_PATH, f"{username}.json")
    if not os.path.exists(filepath):
        return {}
    with open(filepath, 'r') as file:
        return json.load(file)

def save_user_maps(username, maps):
    filepath = os.path.join(DB_PATH, f"{username}.json")
    with open(filepath, 'w') as file:
        json.dump(maps, file, indent=4)

def find_map_by_name(maps, target_name):
    for map_key, map_value in maps.items():
        if map_key == target_name:
            return {
                map_key : map_value
                }
    return None