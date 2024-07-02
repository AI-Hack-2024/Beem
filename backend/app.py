from flask import Flask, request, jsonify
from flask_cors import CORS
from magic_merge import magic_merge

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

if __name__ == '__main__':
    app.run(debug=True)