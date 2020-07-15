var APP_DATA = {
  "scenes": [
    {
      "id": "0-laghetto",
      "name": "Laghetto",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.706060964946472,
        "pitch": -0.13142577960856627,
        "fov": 1.3487598040662003
      },
      "linkHotspots": [
        {
          "yaw": 0.1981642052186281,
          "pitch": -0.48172984685226794,
          "rotation": 0,
          "target": "2-montagna"
        },
        {
          "yaw": 1.5470593464748168,
          "pitch": -0.04284545363458392,
          "rotation": 0,
          "target": "1-bosco"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.20702385244884347,
          "pitch": -0.38316501170410433,
          "title": "Preferisci la Montagna?",
          "text": "Clicca per salire!"
        },
        {
          "yaw": 1.5404856852761482,
          "pitch": 0.04350157426259571,
          "title": "Preferisci il Bosco?",
          "text": "Clicca per entrare!"
        }
      ]
    },
    {
      "id": "1-bosco",
      "name": "Bosco",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3487598040662003
      },
      "linkHotspots": [
        {
          "yaw": -0.1342150853612516,
          "pitch": -0.1151720033619803,
          "rotation": 3.141592653589793,
          "target": "0-laghetto"
        },
        {
          "yaw": 0.8223985177279491,
          "pitch": -0.374615229191793,
          "rotation": 0,
          "target": "2-montagna"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.13224134128029164,
          "pitch": 0.01301198806261361,
          "title": "Preferisci il Lago?",
          "text": "Clicca per tornare!"
        },
        {
          "yaw": 0.8229948015999469,
          "pitch": -0.2894051633494463,
          "title": "Preferisci la Montagna?",
          "text": "Clicca per salire!"
        }
      ]
    },
    {
      "id": "2-montagna",
      "name": "Montagna",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3487598040662003
      },
      "linkHotspots": [
        {
          "yaw": -0.7226204941705152,
          "pitch": 0.2558255390205133,
          "rotation": 3.141592653589793,
          "target": "1-bosco"
        },
        {
          "yaw": 0.2749637393332005,
          "pitch": 0.05698254066630426,
          "rotation": 3.141592653589793,
          "target": "0-laghetto"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.6438583357369865,
          "pitch": 0.27356997144670814,
          "title": "Preferisci il Bosco?",
          "text": "Clicca per entrare!"
        },
        {
          "yaw": 0.27281723390645496,
          "pitch": 0.1715126030589218,
          "title": "Preferisci il Lago?",
          "text": "Clicca per tornare!"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
