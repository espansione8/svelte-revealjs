var APP_DATA = {
  "scenes": [
    {
      "id": "0-3d1",
      "name": "3d1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "yaw": 1.8564658538431091,
        "pitch": -0.01793465824598428,
        "fov": 1.3487598040662003
      },
      "linkHotspots": [
        {
          "yaw": 2.829605815929912,
          "pitch": 0.007870923759695003,
          "rotation": 6.283185307179586,
          "target": "1-3d2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.9620836421832397,
          "pitch": 0.00766844091731933,
          "title": "Title",
          "text": "Text"
        }
      ]
    },
    {
      "id": "1-3d2",
      "name": "3d2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "yaw": 0.7451213345052974,
        "pitch": -0.14986220045180332,
        "fov": 1.3487598040662003
      },
      "linkHotspots": [
        {
          "yaw": -0.11247471389508945,
          "pitch": -0.028584984283558157,
          "rotation": 3.141592653589793,
          "target": "0-3d1"
        },
        {
          "yaw": 1.6390859389395,
          "pitch": -0.4331927347858482,
          "rotation": 0,
          "target": "2-3d3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-3d3",
      "name": "3d3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "yaw": -0.5955698195259966,
        "pitch": 0.3082633254165472,
        "fov": 1.3487598040662003
      },
      "linkHotspots": [
        {
          "yaw": 0.40091712596047735,
          "pitch": 0.05165629574705122,
          "rotation": 3.141592653589793,
          "target": "0-3d1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
