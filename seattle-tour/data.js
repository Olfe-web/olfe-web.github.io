var APP_DATA = {
  "scenes": [
    {
      "id": "0-bathroom",
      "name": "Bathroom",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.256783611432553,
          "pitch": 0.40269791773547503,
          "rotation": 0,
          "target": "4-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-bedroom",
      "name": "Bedroom",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.1066532677082037,
          "pitch": 0.027802071523437277,
          "rotation": 0,
          "target": "3-hallway-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dining",
      "name": "Dining",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.9271611222509044,
          "pitch": 0.401313232480792,
          "rotation": 0,
          "target": "5-kitchen"
        },
        {
          "yaw": 2.462867030550391,
          "pitch": 0.48495074474985245,
          "rotation": 0,
          "target": "4-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-hallway-1",
      "name": "Hallway 1",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.500071662416902,
          "pitch": 0.36172077212399856,
          "rotation": 0,
          "target": "6-living-room"
        },
        {
          "yaw": -3.1406624687085483,
          "pitch": 0.41367437146581487,
          "rotation": 0,
          "target": "4-hallway"
        },
        {
          "yaw": -0.2044738028650297,
          "pitch": 0.29951223251540604,
          "rotation": 0,
          "target": "1-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-hallway",
      "name": "Hallway",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.415173101028092,
          "pitch": 0.45413307173903483,
          "rotation": 0,
          "target": "2-dining"
        },
        {
          "yaw": 0.152929651806204,
          "pitch": 0.3749110126262174,
          "rotation": 0,
          "target": "0-bathroom"
        },
        {
          "yaw": 1.636402680477838,
          "pitch": 0.3799538351776732,
          "rotation": 0,
          "target": "3-hallway-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-kitchen",
      "name": "Kitchen",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.082166279852249,
          "pitch": 0.4230313217512425,
          "rotation": 0,
          "target": "6-living-room"
        },
        {
          "yaw": 1.306771580047915,
          "pitch": 0.2908344656992057,
          "rotation": 0,
          "target": "2-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-living-room",
      "name": "Living Room",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.098569949377328,
          "pitch": 0.4331098862244147,
          "rotation": 0,
          "target": "5-kitchen"
        },
        {
          "yaw": -1.5765118110729013,
          "pitch": 0.34645637622469394,
          "rotation": 0,
          "target": "3-hallway-1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
