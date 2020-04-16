var APP_DATA = {
  "scenes": [
    {
      "id": "0-fachada",
      "name": "Fachada",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -0.040066673837962696,
        "pitch": -0.027195543431878022,
        "fov": 1.320797987785514
      },
      "linkHotspots": [
        {
          "yaw": 0.4659821160104549,
          "pitch": 0.2854442803773338,
          "rotation": 0,
          "target": "1-local-d-ambiente1"
        },
        {
          "yaw": -0.39527717886686276,
          "pitch": 0.3440563130452148,
          "rotation": 0,
          "target": "4-local-c-ambiente1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.8175165659748664,
          "pitch": -0.2231306034966174,
          "title": "Enrique Sada Muguerza #38",
          "text": "Locales en Renta"
        }
      ]
    },
    {
      "id": "1-local-d-ambiente1",
      "name": "Local-D-Ambiente1",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": 0.0935630754657808,
        "pitch": 0.13420684133020266,
        "fov": 1.320797987785514
      },
      "linkHotspots": [
        {
          "yaw": 0.04163933737918235,
          "pitch": 0.26407156953175104,
          "rotation": 0,
          "target": "2-local-d-privado"
        },
        {
          "yaw": 2.9942564035321215,
          "pitch": 0.3761740302129688,
          "rotation": 0,
          "target": "0-fachada"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.5510447519832553,
          "pitch": -0.1194949797794056,
          "title": "Local D: 42 m2",
          "text": "Cuenta con área privada (oficina) con baño"
        }
      ]
    },
    {
      "id": "2-local-d-privado",
      "name": "Local-D-Privado",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -0.5145973246460898,
        "pitch": 0.5345753250277312,
        "fov": 1.320797987785514
      },
      "linkHotspots": [
        {
          "yaw": -0.8136332929316623,
          "pitch": 0.7735807576747646,
          "rotation": 0,
          "target": "3-local-d-bao"
        },
        {
          "yaw": 2.538412636807447,
          "pitch": 0.6711101355888154,
          "rotation": 0,
          "target": "1-local-d-ambiente1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-local-d-bao",
      "name": "Local-D-Baño",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": 1.1626826296230668,
        "pitch": 1.229229434256867,
        "fov": 1.320797987785514
      },
      "linkHotspots": [
        {
          "yaw": -2.3075145076023507,
          "pitch": 1.129533921081327,
          "rotation": 0,
          "target": "2-local-d-privado"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-local-c-ambiente1",
      "name": "Local-C-Ambiente1",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -0.5217247938018872,
        "pitch": 0.3089739937794267,
        "fov": 1.320797987785514
      },
      "linkHotspots": [
        {
          "yaw": 0.10513516186789573,
          "pitch": 0.274898781999358,
          "rotation": 0,
          "target": "5-local-c-privado"
        },
        {
          "yaw": -2.9454424408531725,
          "pitch": 0.33634115749378957,
          "rotation": 0,
          "target": "0-fachada"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.342835355720002,
          "pitch": -0.02857970998193693,
          "title": "Local C: 70 m2",
          "text": "Cuenta con espacio privado (oficina) y baño"
        }
      ]
    },
    {
      "id": "5-local-c-privado",
      "name": "Local-C-Privado",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -0.27169558458880516,
        "pitch": 0.5672138199615926,
        "fov": 1.320797987785514
      },
      "linkHotspots": [
        {
          "yaw": -0.7335892952789766,
          "pitch": 0.8385285669570095,
          "rotation": 0,
          "target": "6-local-c-bao"
        },
        {
          "yaw": 2.2486143861082013,
          "pitch": 0.6395364411669515,
          "rotation": 0,
          "target": "4-local-c-ambiente1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-local-c-bao",
      "name": "Local-C-Baño",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -0.8002011067456465,
        "pitch": 1.1050666845743038,
        "fov": 1.320797987785514
      },
      "linkHotspots": [
        {
          "yaw": 2.9176196865067414,
          "pitch": 0.9624694761742933,
          "rotation": 0,
          "target": "5-local-c-privado"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "ESadaMuguerza38-Locales",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
