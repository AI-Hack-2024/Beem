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