# Design Export Context

- Generated at: `2026-03-15T10:18:38.602Z`
- Document ID: `590269f5-2575-4cce-97df-b93a88af793b`
- Page count: 7

## Original Prompt

```text
A software tool for manufacturers with 4 different tabs: an insights section, a quoting tool, a chat to retrieve technical knowledge base from company docs, an agents pane with different agents set up to work on different tasks.

Overall design direction

Design this product as a premium AI-native manufacturing interface with soft glass surfaces, subdued contrast, cinematic background depth, and clean editorial spacing. Avoid default B2B dashboard styling, harsh table grids, bright status colors, and generic white cards. The UI should feel calm, modern, and curated, with a small number of beautiful surface types repeated consistently.

Core visual principles
1. Replace flat white with layered neutral surfaces

Use an off-white, foggy, slightly tinted base instead of plain white.

Good direction:

warm grey

cool mist

faint blue-grey

smoke-tinted neutrals

Avoid:

pure white everywhere

dark black-on-white contrast across the whole app

sharp grey borders

2. Introduce glass carefully

Use glassmorphism as a restraint, not as a trick.

Apply to:

key panels

nav shell

AI summary panels

floating overlays

modal/detail cards

Glass should mean:

soft blur

low opacity fill

delicate border highlight

subtle shadow

background tint bleeding through slightly

Not:

heavy transparency

neon glows

overdone blur on every element

3. Make the page background part of the product

Every page should sit on a soft atmospheric backdrop.

Use:

blurred gradient wash

subtle radial lighting

muted industrial-inspired tones

faint texture or haze

Do not use:

blank white page with cards dropped on top

4. Reduce component variety

Create a tighter design system:

one sidebar style

one primary card style

one secondary card style

one dark CTA button style

one chip system

one input style

Right now it feels like default components assembled page by page.

5. Remove visible clutter

Strip out:

unnecessary divider lines

heavy table borders

boxed-in sections inside boxed-in sections

excessive badge colors

too many tiny labels

The feeling should be "composed and quiet."
```

## Theme (JSON)

```json
{
  "fonts": {
    "primary": "google:Inter",
    "secondary": "google:Inter"
  },
  "colors": {
    "light": {
      "primary": "#1A1A1A",
      "on_primary": "#FFFFFF",
      "secondary": "#7C9CB4",
      "on_secondary": "#FFFFFF",
      "accent": "#C4836A",
      "background": "#F2F4F5",
      "surface": "#FFFFFFB3",
      "on_surface": "#1A1A1A",
      "primary_text": "#1A1A1A",
      "secondary_text": "#666666",
      "hint": "#A0A0A0",
      "error": "#BC4B41",
      "on_error": "#FFFFFF",
      "success": "#4A6741",
      "divider": "#0000000A",
      "transparent": "#00000000"
    },
    "dark": {
      "primary": "#F5F5F5",
      "on_primary": "#1A1A1A",
      "secondary": "#7C9CB4",
      "on_secondary": "#FFFFFF",
      "accent": "#C4836A",
      "background": "#121212",
      "surface": "#1E1E1E99",
      "on_surface": "#F5F5F5",
      "primary_text": "#F5F5F5",
      "secondary_text": "#A0A0A0",
      "hint": "#4A4A4A",
      "error": "#E57373",
      "on_error": "#1A1A1A",
      "success": "#81C784",
      "divider": "#FFFFFF0D",
      "transparent": "#00000000"
    }
  },
  "text_styles": {
    "headline_large": {
      "font": "primary",
      "size": 32,
      "weight": 600,
      "height": 1.2
    },
    "headline_medium": {
      "font": "primary",
      "size": 26,
      "weight": 600,
      "height": 1.25
    },
    "title_large": {
      "font": "primary",
      "size": 20,
      "weight": 600,
      "height": 1.3
    },
    "title_medium": {
      "font": "primary",
      "size": 16,
      "weight": 600,
      "height": 1.4
    },
    "body_large": {
      "font": "secondary",
      "size": 16,
      "weight": 400,
      "height": 1.5
    },
    "body_medium": {
      "font": "secondary",
      "size": 14,
      "weight": 400,
      "height": 1.5
    },
    "body_small": {
      "font": "secondary",
      "size": 12,
      "weight": 400,
      "height": 1.4
    },
    "label_large": {
      "font": "secondary",
      "size": 14,
      "weight": 500,
      "height": 1.3
    },
    "label_medium": {
      "font": "secondary",
      "size": 12,
      "weight": 500,
      "height": 1.3
    },
    "label_small": {
      "font": "secondary",
      "size": 10,
      "weight": 500,
      "height": 1.2
    }
  },
  "spacing": {
    "xs": 4,
    "sm": 8,
    "md": 16,
    "lg": 24,
    "xl": 40
  },
  "radii": {
    "sm": 8,
    "md": 12,
    "lg": 16,
    "full": 9999
  },
  "shadows": {
    "sm": {
      "color": "#0000000A",
      "dx": 0,
      "dy": 1,
      "blur": 3,
      "spread": 0
    },
    "md": {
      "color": "#0000000D",
      "dx": 0,
      "dy": 4,
      "blur": 12,
      "spread": 0
    },
    "lg": {
      "color": "#00000014",
      "dx": 0,
      "dy": 8,
      "blur": 24,
      "spread": -4
    },
    "xl": {
      "color": "#0000001A",
      "dx": 0,
      "dy": 12,
      "blur": 32,
      "spread": -8
    }
  }
}
```

## Pages

### 1. Insights Dashboard

- Frame ID: `0e273a72-e8e7-4f0b-9e28-b4082a78cd01`
- Original page prompt: "A high-level manufacturing overview with soft glass panels showing production trends and key performance metrics."
- Follow-up prompts: _None_

#### DslDocument (JSON)

```json
{
  "root": {
    "type": "scaffold",
    "properties": {
      "bg": {
        "color": {
          "color": "#F2F4F7"
        }
      },
      "safe_area": {
        "boolVal": {
          "value": true
        }
      }
    },
    "children": [
      {
        "type": "stack",
        "children": [
          {
            "type": "container",
            "properties": {
              "width": {
                "px": {
                  "value": "Infinity",
                  "isInfinity": true
                }
              },
              "height": {
                "px": {
                  "value": "Infinity",
                  "isInfinity": true
                }
              },
              "gradient": {
                "gradient": {
                  "type": "GRADIENT_TYPE_RADIAL",
                  "direction": "top_right",
                  "stops": [
                    {
                      "color": "#E0E7FF",
                      "position": 0
                    },
                    {
                      "color": "#F2F4F7",
                      "position": 70
                    }
                  ]
                }
              }
            },
            "editorId": "3d4334dd-d38b-4c1a-a641-89da57a9d701"
          },
          {
            "type": "row",
            "properties": {
              "cross_align": {
                "align": {
                  "named": "stretch"
                }
              }
            },
            "children": [
              {
                "type": "container",
                "properties": {
                  "width": {
                    "px": {
                      "value": 260,
                      "isInfinity": false
                    }
                  },
                  "border": {
                    "borderSided": {
                      "side": "right",
                      "width": 1,
                      "color": "#0000000A"
                    }
                  },
                  "padding": {
                    "edgeInsets": {
                      "top": 0,
                      "right": 0,
                      "bottom": 0,
                      "left": 0,
                      "topToken": "lg",
                      "rightToken": "md",
                      "bottomToken": "lg",
                      "leftToken": "md"
                    }
                  }
                },
                "children": [
                  {
                    "type": "column",
                    "properties": {
                      "cross_align": {
                        "align": {
                          "named": "stretch"
                        }
                      },
                      "spacing": {
                        "stringVal": {
                          "value": "lg"
                        }
                      }
                    },
                    "children": [
                      {
                        "type": "row",
                        "properties": {
                          "padding": {
                            "edgeInsets": {
                              "top": 0,
                              "right": 0,
                              "bottom": 0,
                              "left": 0,
                              "token": "md"
                            }
                          },
                          "spacing": {
                            "stringVal": {
                              "value": "sm"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "container",
                            "properties": {
                              "width": {
                                "px": {
                                  "value": 32,
                                  "isInfinity": false
                                }
                              },
                              "height": {
                                "px": {
                                  "value": 32,
                                  "isInfinity": false
                                }
                              },
                              "bg": {
                                "color": {
                                  "color": "primary_text"
                                }
                              },
                              "radius": {
                                "radius": {
                                  "topLeft": 0,
                                  "topRight": 0,
                                  "bottomLeft": 0,
                                  "bottomRight": 0,
                                  "token": "md"
                                }
                              },
                              "align_child": {
                                "align": {
                                  "named": "center"
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "icon",
                                "properties": {
                                  "name": {
                                    "icon": {
                                      "name": "memory_rounded"
                                    }
                                  },
                                  "color": {
                                    "color": {
                                      "color": "background"
                                    }
                                  },
                                  "size": {
                                    "numberVal": {
                                      "value": 20
                                    }
                                  }
                                },
                                "editorId": "ec2e37a8-9491-4d62-b652-4c68b7cdde58"
                              }
                            ],
                            "editorId": "e9cea351-2ed2-458d-a199-038265530302"
                          },
                          {
                            "type": "text",
                            "properties": {
                              "content": {
                                "stringVal": {
                                  "value": "FORGE"
                                }
                              },
                              "style": {
                                "textStyle": {
                                  "styleName": "title_medium"
                                }
                              },
                              "font_weight": {
                                "numberVal": {
                                  "value": 800
                                }
                              },
                              "color": {
                                "color": {
                                  "color": "primary_text"
                                }
                              }
                            },
                            "editorId": "518c7f79-9673-4983-bee0-9d6b923cde44"
                          }
                        ],
                        "editorId": "3d6656c1-bc6b-46c7-ac69-92f4e20de6e2"
                      },
                      {
                        "type": "column",
                        "properties": {
                          "spacing": {
                            "stringVal": {
                              "value": "xs"
                            }
                          },
                          "cross_align": {
                            "align": {
                              "named": "stretch"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "@nav_item",
                            "properties": {
                              "icon": {
                                "stringVal": {
                                  "value": "dashboard_rounded"
                                }
                              },
                              "label": {
                                "stringVal": {
                                  "value": "Insights"
                                }
                              },
                              "active": {
                                "boolVal": {
                                  "value": true
                                }
                              }
                            },
                            "editorId": "73a9cdee-6864-446b-81d1-62b10f30cc5f"
                          },
                          {
                            "type": "@nav_item",
                            "properties": {
                              "icon": {
                                "stringVal": {
                                  "value": "request_quote_rounded"
                                }
                              },
                              "label": {
                                "stringVal": {
                                  "value": "Quoting"
                                }
                              },
                              "active": {
                                "boolVal": {
                                  "value": false
                                }
                              }
                            },
                            "editorId": "2146e3d7-3575-4b59-9595-f47309be3787"
                          },
                          {
                            "type": "@nav_item",
                            "properties": {
                              "icon": {
                                "stringVal": {
                                  "value": "psychology_rounded"
                                }
                              },
                              "label": {
                                "stringVal": {
                                  "value": "Knowledge Base"
                                }
                              },
                              "active": {
                                "boolVal": {
                                  "value": false
                                }
                              }
                            },
                            "editorId": "ce33054b-a9c9-4cc5-9dc7-ed9ab63d1416"
                          },
                          {
                            "type": "@nav_item",
                            "properties": {
                              "icon": {
                                "stringVal": {
                                  "value": "precision_manufacturing_rounded"
                                }
                              },
                              "label": {
                                "stringVal": {
                                  "value": "Agents"
                                }
                              },
                              "active": {
                                "boolVal": {
                                  "value": false
                                }
                              }
                            },
                            "editorId": "8c53d276-5afd-4837-ac70-20f68e241ec4"
                          }
                        ],
                        "editorId": "0f423961-d4b7-4de3-ae67-35223eb7c454"
                      },
                      {
                        "type": "spacer",
                        "editorId": "9b44147a-ad44-4b3d-b6bb-ae988079bf65"
                      },
                      {
                        "type": "container",
                        "properties": {
                          "bg": {
                            "color": {
                              "color": "#00000005"
                            }
                          },
                          "radius": {
                            "radius": {
                              "topLeft": 0,
                              "topRight": 0,
                              "bottomLeft": 0,
                              "bottomRight": 0,
                              "token": "lg"
                            }
                          },
                          "padding": {
                            "edgeInsets": {
                              "top": 0,
                              "right": 0,
                              "bottom": 0,
                              "left": 0,
                              "token": "md"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "row",
                            "properties": {
                              "spacing": {
                                "stringVal": {
                                  "value": "md"
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "avatar",
                                "properties": {
                                  "text": {
                                    "stringVal": {
                                      "value": "JD"
                                    }
                                  },
                                  "bg": {
                                    "color": {
                                      "color": "primary_text"
                                    }
                                  },
                                  "color": {
                                    "color": {
                                      "color": "background"
                                    }
                                  },
                                  "size": {
                                    "numberVal": {
                                      "value": 32
                                    }
                                  }
                                },
                                "editorId": "331f066c-1f1e-4531-ba07-f70f70435c07"
                              },
                              {
                                "type": "expanded",
                                "children": [
                                  {
                                    "type": "column",
                                    "properties": {
                                      "cross_align": {
                                        "align": {
                                          "named": "start"
                                        }
                                      }
                                    },
                                    "children": [
                                      {
                                        "type": "text",
                                        "properties": {
                                          "content": {
                                            "stringVal": {
                                              "value": "Julian Draxler"
                                            }
                                          },
                                          "style": {
                                            "textStyle": {
                                              "styleName": "label_large"
                                            }
                                          },
                                          "color": {
                                            "color": {
                                              "color": "primary_text"
                                            }
                                          },
                                          "max_lines": {
                                            "numberVal": {
                                              "value": 1
                                            }
                                          }
                                        },
                                        "editorId": "1ea5a324-3fe9-4b6b-80c4-f08a19712931"
                                      },
                                      {
                                        "type": "text",
                                        "properties": {
                                          "content": {
                                            "stringVal": {
                                              "value": "Plant Manager"
                                            }
                                          },
                                          "style": {
                                            "textStyle": {
                                              "styleName": "label_small"
                                            }
                                          },
                                          "color": {
                                            "color": {
                                              "color": "secondary_text"
                                            }
                                          }
                                        },
                                        "editorId": "b655c7c9-c0fd-448e-991a-6a502712846b"
                                      }
                                    ],
                                    "editorId": "26340adb-8434-4a7d-bb4b-e70867b50657"
                                  }
                                ],
                                "editorId": "8587febf-d4f5-4c84-9b6f-b03e9f922949"
                              },
                              {
                                "type": "icon",
                                "properties": {
                                  "name": {
                                    "icon": {
                                      "name": "settings_rounded"
                                    }
                                  },
                                  "size": {
                                    "numberVal": {
                                      "value": 18
                                    }
                                  },
                                  "color": {
                                    "color": {
                                      "color": "secondary_text"
                                    }
                                  }
                                },
                                "editorId": "6e330d23-16ae-4937-9502-e3893e8c54b7"
                              }
                            ],
                            "editorId": "9e7b77b0-974f-4508-94cb-8c872118f0fd"
                          }
                        ],
                        "editorId": "353237f7-2551-41cd-a546-8d5a16452db3"
                      }
                    ],
                    "editorId": "94c6f1f6-745a-4d42-878b-fc42a494880b"
                  }
                ],
                "editorId": "44c891b0-0f72-4481-bd14-68ead96f4529"
              },
              {
                "type": "expanded",
                "children": [
                  {
                    "type": "column",
                    "properties": {
                      "scroll": {
                        "boolVal": {
                          "value": true
                        }
                      },
                      "padding": {
                        "edgeInsets": {
                          "top": 0,
                          "right": 0,
                          "bottom": 0,
                          "left": 0,
                          "token": "xl"
                        }
                      },
                      "spacing": {
                        "stringVal": {
                          "value": "xl"
                        }
                      },
                      "cross_align": {
                        "align": {
                          "named": "stretch"
                        }
                      }
                    },
                    "children": [
                      {
                        "type": "row",
                        "properties": {
                          "align": {
                            "align": {
                              "named": "space_between"
                            }
                          },
                          "cross_align": {
                            "align": {
                              "named": "center"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "column",
                            "properties": {
                              "cross_align": {
                                "align": {
                                  "named": "start"
                                }
                              },
                              "spacing": {
                                "stringVal": {
                                  "value": "xs"
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "text",
                                "properties": {
                                  "content": {
                                    "stringVal": {
                                      "value": "Manufacturing Insights"
                                    }
                                  },
                                  "style": {
                                    "textStyle": {
                                      "styleName": "headline_small"
                                    }
                                  },
                                  "font_weight": {
                                    "numberVal": {
                                      "value": 700
                                    }
                                  },
                                  "color": {
                                    "color": {
                                      "color": "primary_text"
                                    }
                                  }
                                },
                                "editorId": "0c0b3fc4-044b-44dd-941b-afbd4f2684b8"
                              },
                              {
                                "type": "text",
                                "properties": {
                                  "content": {
                                    "stringVal": {
                                      "value": "Real-time production intelligence and facility performance."
                                    }
                                  },
                                  "style": {
                                    "textStyle": {
                                      "styleName": "body_medium"
                                    }
                                  },
                                  "color": {
                                    "color": {
                                      "color": "secondary_text"
                                    }
                                  }
                                },
                                "editorId": "408a8058-15a6-4d97-bacc-4bab720d3741"
                              }
                            ],
                            "editorId": "0c86ba92-ec87-4950-9a69-9c32a2b4332d"
                          },
                          {
                            "type": "row",
                            "properties": {
                              "spacing": {
                                "stringVal": {
                                  "value": "md"
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "container",
                                "properties": {
                                  "bg": {
                                    "color": {
                                      "color": "surface"
                                    }
                                  },
                                  "radius": {
                                    "radius": {
                                      "topLeft": 0,
                                      "topRight": 0,
                                      "bottomLeft": 0,
                                      "bottomRight": 0,
                                      "token": "md"
                                    }
                                  },
                                  "border": {
                                    "border": {
                                      "width": 1,
                                      "color": "divider"
                                    }
                                  },
                                  "padding": {
                                    "edgeInsets": {
                                      "top": 0,
                                      "right": 0,
                                      "bottom": 0,
                                      "left": 0,
                                      "topToken": "sm",
                                      "rightToken": "md",
                                      "bottomToken": "sm",
                                      "leftToken": "md"
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "row",
                                    "properties": {
                                      "spacing": {
                                        "stringVal": {
                                          "value": "sm"
                                        }
                                      }
                                    },
                                    "children": [
                                      {
                                        "type": "icon",
                                        "properties": {
                                          "name": {
                                            "icon": {
                                              "name": "calendar_today_rounded"
                                            }
                                          },
                                          "size": {
                                            "numberVal": {
                                              "value": 16
                                            }
                                          },
                                          "color": {
                                            "color": {
                                              "color": "secondary_text"
                                            }
                                          }
                                        },
                                        "editorId": "6254f552-77f1-424a-a9c6-01fe3b82397a"
                                      },
                                      {
                                        "type": "text",
                                        "properties": {
                                          "content": {
                                            "stringVal": {
                                              "value": "Last 30 Days"
                                            }
                                          },
                                          "style": {
                                            "textStyle": {
                                              "styleName": "label_medium"
                                            }
                                          },
                                          "color": {
                                            "color": {
                                              "color": "primary_text"
                                            }
                                          }
                                        },
                                        "editorId": "f53ee9cb-d358-4737-a080-2893fb03fef8"
                                      }
                                    ],
                                    "editorId": "3cea78c9-5b6b-4539-a74e-88d373528016"
                                  }
                                ],
                                "editorId": "35c6e7b1-a4f6-4221-8eb8-b3a50d4799e7"
                              },
                              {
                                "type": "button",
                                "properties": {
                                  "content": {
                                    "stringVal": {
                                      "value": "Export Report"
                                    }
                                  },
                                  "icon": {
                                    "icon": {
                                      "name": "download_rounded"
                                    }
                                  },
                                  "variant": {
                                    "stringVal": {
                                      "value": "filled"
                                    }
                                  },
                                  "bg": {
                                    "color": {
                                      "color": "primary_text"
                                    }
                                  },
                                  "color": {
                                    "color": {
                                      "color": "background"
                                    }
                                  },
                                  "radius": {
                                    "radius": {
                                      "topLeft": 0,
                                      "topRight": 0,
                                      "bottomLeft": 0,
                                      "bottomRight": 0,
                                      "token": "md"
                                    }
                                  }
                                },
                                "editorId": "a4b4bd48-effc-4823-a1bc-a71a6f2e0757"
                              }
                            ],
                            "editorId": "628bcfd7-f6d8-440e-8612-620ae3f9a8d6"
                          }
                        ],
                        "editorId": "f424d3e6-5aac-44ef-a326-a760bb7c4948"
                      },
                      {
                        "type": "row",
                        "properties": {
                          "spacing": {
                            "stringVal": {
                              "value": "lg"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "expanded",
                            "properties": {
                              "flex": {
                                "numberVal": {
                                  "value": 1
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "@metric_card",
                                "properties": {
                                  "title": {
                                    "stringVal": {
                                      "value": "OEE Score"
                                    }
                                  },
                                  "value": {
                                    "stringVal": {
                                      "value": "84.2%"
                                    }
                                  },
                                  "trend": {
                                    "stringVal": {
                                      "value": "+2.4%"
                                    }
                                  },
                                  "trend_bg": {
                                    "color": {
                                      "color": "#E8F5E9"
                                    }
                                  },
                                  "trend_color": {
                                    "color": {
                                      "color": "#2E7D32"
                                    }
                                  },
                                  "subtitle": {
                                    "stringVal": {
                                      "value": "Overall Equipment Effectiveness"
                                    }
                                  }
                                },
                                "editorId": "d0fae8a9-5192-43a2-aec6-2c11d5fbd189"
                              }
                            ],
                            "editorId": "6388e8cc-b524-4600-9504-3db4b4cf5317"
                          },
                          {
                            "type": "expanded",
                            "properties": {
                              "flex": {
                                "numberVal": {
                                  "value": 1
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "@metric_card",
                                "properties": {
                                  "title": {
                                    "stringVal": {
                                      "value": "Yield Rate"
                                    }
                                  },
                                  "value": {
                                    "stringVal": {
                                      "value": "98.1%"
                                    }
                                  },
                                  "trend": {
                                    "stringVal": {
                                      "value": "+0.8%"
                                    }
                                  },
                                  "trend_bg": {
                                    "color": {
                                      "color": "#E8F5E9"
                                    }
                                  },
                                  "trend_color": {
                                    "color": {
                                      "color": "#2E7D32"
                                    }
                                  },
                                  "subtitle": {
                                    "stringVal": {
                                      "value": "Quality pass rate per unit"
                                    }
                                  }
                                },
                                "editorId": "d7c5623f-98b0-4884-9cfa-f72db17c888d"
                              }
                            ],
                            "editorId": "7c8f00dd-76a3-44a7-99e4-d4eafb425e25"
                          },
                          {
                            "type": "expanded",
                            "properties": {
                              "flex": {
                                "numberVal": {
                                  "value": 1
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "@metric_card",
                                "properties": {
                                  "title": {
                                    "stringVal": {
                                      "value": "Down Time"
                                    }
                                  },
                                  "value": {
                                    "stringVal": {
                                      "value": "12h 4m"
                                    }
                                  },
                                  "trend": {
                                    "stringVal": {
                                      "value": "-14%"
                                    }
                                  },
                                  "trend_bg": {
                                    "color": {
                                      "color": "#E8F5E9"
                                    }
                                  },
                                  "trend_color": {
                                    "color": {
                                      "color": "#2E7D32"
                                    }
                                  },
                                  "subtitle": {
                                    "stringVal": {
                                      "value": "Unplanned maintenance"
                                    }
                                  }
                                },
                                "editorId": "39ba91e6-2d1b-4aa3-a941-6342e07dd1fa"
                              }
                            ],
                            "editorId": "7487577d-6a7b-4901-bb5a-1265166f653c"
                          },
                          {
                            "type": "expanded",
                            "properties": {
                              "flex": {
                                "numberVal": {
                                  "value": 1
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "@metric_card",
                                "properties": {
                                  "title": {
                                    "stringVal": {
                                      "value": "Active Agents"
                                    }
                                  },
                                  "value": {
                                    "stringVal": {
                                      "value": "08/12"
                                    }
                                  },
                                  "trend": {
                                    "stringVal": {
                                      "value": "Stable"
                                    }
                                  },
                                  "trend_bg": {
                                    "color": {
                                      "color": "#F5F5F5"
                                    }
                                  },
                                  "trend_color": {
                                    "stringVal": {
                                      "value": "secondary_text"
                                    }
                                  },
                                  "subtitle": {
                                    "stringVal": {
                                      "value": "AI workflow utilization"
                                    }
                                  }
                                },
                                "editorId": "59cde3b0-9a3e-4ec3-8b7e-00465a424e4f"
                              }
                            ],
                            "editorId": "49c389dd-6994-485d-8b82-ae619d1189dd"
                          }
                        ],
                        "editorId": "fa0613f2-5031-46a5-8fb8-7538c99d0509"
                      },
                      {
                        "type": "row",
                        "properties": {
                          "spacing": {
                            "stringVal": {
                              "value": "lg"
                            }
                          },
                          "cross_align": {
                            "align": {
                              "named": "start"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "expanded",
                            "properties": {
                              "flex": {
                                "numberVal": {
                                  "value": 2
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "@glass_card",
                                "properties": {
                                  "padding": {
                                    "stringVal": {
                                      "value": "lg"
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "column",
                                    "properties": {
                                      "cross_align": {
                                        "align": {
                                          "named": "stretch"
                                        }
                                      },
                                      "spacing": {
                                        "stringVal": {
                                          "value": "lg"
                                        }
                                      }
                                    },
                                    "children": [
                                      {
                                        "type": "row",
                                        "properties": {
                                          "align": {
                                            "align": {
                                              "named": "space_between"
                                            }
                                          }
                                        },
                                        "children": [
                                          {
                                            "type": "text",
                                            "properties": {
                                              "content": {
                                                "stringVal": {
                                                  "value": "Production Output Trend"
                                                }
                                              },
                                              "style": {
                                                "textStyle": {
                                                  "styleName": "title_medium"
                                                }
                                              },
                                              "font_weight": {
                                                "numberVal": {
                                                  "value": 600
                                                }
                                              }
                                            },
                                            "editorId": "d5013f44-48a4-4e85-bd36-84f8247d2e48"
                                          },
                                          {
                                            "type": "row",
                                            "properties": {
                                              "spacing": {
                                                "stringVal": {
                                                  "value": "md"
                                                }
                                              }
                                            },
                                            "children": [
                                              {
                                                "type": "chip",
                                                "properties": {
                                                  "content": {
                                                    "stringVal": {
                                                      "value": "Units"
                                                    }
                                                  },
                                                  "selected": {
                                                    "boolVal": {
                                                      "value": true
                                                    }
                                                  },
                                                  "bg": {
                                                    "color": {
                                                      "color": "primary_text"
                                                    }
                                                  },
                                                  "color": {
                                                    "color": {
                                                      "color": "background"
                                                    }
                                                  }
                                                },
                                                "editorId": "f2d6b952-4701-4963-870e-ef1fe14018bb"
                                              },
                                              {
                                                "type": "chip",
                                                "properties": {
                                                  "content": {
                                                    "stringVal": {
                                                      "value": "Efficiency"
                                                    }
                                                  },
                                                  "variant": {
                                                    "stringVal": {
                                                      "value": "filter"
                                                    }
                                                  }
                                                },
                                                "editorId": "a8ab8b37-9bdf-453f-8ae0-a507ce54f5e4"
                                              }
                                            ],
                                            "editorId": "2504d9c6-14de-4b38-90f5-6af154e7f8ea"
                                          }
                                        ],
                                        "editorId": "f9aa5ff2-8954-4dd1-abb9-a62b620389b3"
                                      },
                                      {
                                        "type": "container",
                                        "properties": {
                                          "height": {
                                            "px": {
                                              "value": 300,
                                              "isInfinity": false
                                            }
                                          }
                                        },
                                        "children": [
                                          {
                                            "type": "line_chart",
                                            "properties": {
                                              "data": {
                                                "stringVal": {
                                                  "value": "45,52,48,61,58,72,68"
                                                }
                                              },
                                              "labels": {
                                                "stringVal": {
                                                  "value": "Mon,Tue,Wed,Thu,Fri,Sat,Sun"
                                                }
                                              },
                                              "color": {
                                                "color": {
                                                  "color": "primary_text"
                                                }
                                              },
                                              "curved": {
                                                "boolVal": {
                                                  "value": true
                                                }
                                              },
                                              "filled": {
                                                "boolVal": {
                                                  "value": true
                                                }
                                              },
                                              "fill_opacity": {
                                                "numberVal": {
                                                  "value": 0.1
                                                }
                                              },
                                              "line_width": {
                                                "numberVal": {
                                                  "value": 3
                                                }
                                              }
                                            },
                                            "editorId": "b6b1fb87-914f-40a7-9fba-d7eaef42c2e8"
                                          }
                                        ],
                                        "editorId": "6ca42866-006a-4982-94ce-278fa6369483"
                                      }
                                    ],
                                    "editorId": "1f619a04-cd8a-452b-9bd9-836188d9dcae"
                                  }
                                ],
                                "editorId": "dfb6b994-1e14-4598-841d-a608fe153aa2"
                              }
                            ],
                            "editorId": "37930483-07fa-45bc-a9bd-eb6fe56b9bdd"
                          },
                          {
                            "type": "expanded",
                            "properties": {
                              "flex": {
                                "numberVal": {
                                  "value": 1
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "@glass_card",
                                "properties": {
                                  "padding": {
                                    "stringVal": {
                                      "value": "lg"
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "column",
                                    "properties": {
                                      "cross_align": {
                                        "align": {
                                          "named": "stretch"
                                        }
                                      },
                                      "spacing": {
                                        "stringVal": {
                                          "value": "lg"
                                        }
                                      }
                                    },
                                    "children": [
                                      {
                                        "type": "text",
                                        "properties": {
                                          "content": {
                                            "stringVal": {
                                              "value": "Energy Allocation"
                                            }
                                          },
                                          "style": {
                                            "textStyle": {
                                              "styleName": "title_medium"
                                            }
                                          },
                                          "font_weight": {
                                            "numberVal": {
                                              "value": 600
                                            }
                                          }
                                        },
                                        "editorId": "7126ec8c-467a-4d61-9297-192725dd1e41"
                                      },
                                      {
                                        "type": "container",
                                        "properties": {
                                          "height": {
                                            "px": {
                                              "value": 220,
                                              "isInfinity": false
                                            }
                                          },
                                          "align_child": {
                                            "align": {
                                              "named": "center"
                                            }
                                          }
                                        },
                                        "children": [
                                          {
                                            "type": "pie_chart",
                                            "properties": {
                                              "data": {
                                                "stringVal": {
                                                  "value": "40,35,25"
                                                }
                                              },
                                              "labels": {
                                                "stringVal": {
                                                  "value": "Milling,Assembly,HVAC"
                                                }
                                              },
                                              "colors": {
                                                "stringVal": {
                                                  "value": "#1A1A1A,#4A6741,#7C9CB4"
                                                }
                                              },
                                              "donut": {
                                                "boolVal": {
                                                  "value": true
                                                }
                                              },
                                              "donut_radius": {
                                                "numberVal": {
                                                  "value": 50
                                                }
                                              }
                                            },
                                            "editorId": "b351cab4-5088-424e-97ac-9a71aed29463"
                                          }
                                        ],
                                        "editorId": "0e8d1411-2143-4547-94c6-ef7e06fd29c6"
                                      },
                                      {
                                        "type": "column",
                                        "properties": {
                                          "spacing": {
                                            "stringVal": {
                                              "value": "sm"
                                            }
                                          }
                                        },
                                        "children": [
                                          {
                                            "type": "row",
                                            "properties": {
                                              "align": {
                                                "align": {
                                                  "named": "space_between"
                                                }
                                              }
                                            },
                                            "children": [
                                              {
                                                "type": "row",
                                                "properties": {
                                                  "spacing": {
                                                    "stringVal": {
                                                      "value": "sm"
                                                    }
                                                  }
                                                },
                                                "children": [
                                                  {
                                                    "type": "container",
                                                    "properties": {
                                                      "width": {
                                                        "px": {
                                                          "value": 8,
                                                          "isInfinity": false
                                                        }
                                                      },
                                                      "height": {
                                                        "px": {
                                                          "value": 8,
                                                          "isInfinity": false
                                                        }
                                                      },
                                                      "radius": {
                                                        "radius": {
                                                          "topLeft": 4,
                                                          "topRight": 4,
                                                          "bottomLeft": 4,
                                                          "bottomRight": 4
                                                        }
                                                      },
                                                      "bg": {
                                                        "color": {
                                                          "color": "#1A1A1A"
                                                        }
                                                      }
                                                    },
                                                    "editorId": "f0830544-b4ff-40a5-936a-3d4dcd1b53a1"
                                                  },
                                                  {
                                                    "type": "text",
                                                    "properties": {
                                                      "content": {
                                                        "stringVal": {
                                                          "value": "Milling"
                                                        }
                                                      },
                                                      "style": {
                                                        "textStyle": {
                                                          "styleName": "body_small"
                                                        }
                                                      },
                                                      "color": {
                                                        "color": {
                                                          "color": "secondary_text"
                                                        }
                                                      }
                                                    },
                                                    "editorId": "21e69bf1-f958-4938-901a-e421ab88524d"
                                                  }
                                                ],
                                                "editorId": "ac49394f-f3b4-4f6b-8dec-084ec54e8844"
                                              },
                                              {
                                                "type": "text",
                                                "properties": {
                                                  "content": {
                                                    "stringVal": {
                                                      "value": "40%"
                                                    }
                                                  },
                                                  "style": {
                                                    "textStyle": {
                                                      "styleName": "label_medium"
                                                    }
                                                  },
                                                  "font_weight": {
                                                    "numberVal": {
                                                      "value": 600
                                                    }
                                                  }
                                                },
                                                "editorId": "c15b26e9-b80f-41b5-890d-d655b9e98191"
                                              }
                                            ],
                                            "editorId": "ae98c619-da6c-47d2-bb97-6d518112c17f"
                                          },
                                          {
                                            "type": "row",
                                            "properties": {
                                              "align": {
                                                "align": {
                                                  "named": "space_between"
                                                }
                                              }
                                            },
                                            "children": [
                                              {
                                                "type": "row",
                                                "properties": {
                                                  "spacing": {
                                                    "stringVal": {
                                                      "value": "sm"
                                                    }
                                                  }
                                                },
                                                "children": [
                                                  {
                                                    "type": "container",
                                                    "properties": {
                                                      "width": {
                                                        "px": {
                                                          "value": 8,
                                                          "isInfinity": false
                                                        }
                                                      },
                                                      "height": {
                                                        "px": {
                                                          "value": 8,
                                                          "isInfinity": false
                                                        }
                                                      },
                                                      "radius": {
                                                        "radius": {
                                                          "topLeft": 4,
                                                          "topRight": 4,
                                                          "bottomLeft": 4,
                                                          "bottomRight": 4
                                                        }
                                                      },
                                                      "bg": {
                                                        "color": {
                                                          "color": "#4A6741"
                                                        }
                                                      }
                                                    },
                                                    "editorId": "d46a277d-415b-484d-83a3-d372578b96af"
                                                  },
                                                  {
                                                    "type": "text",
                                                    "properties": {
                                                      "content": {
                                                        "stringVal": {
                                                          "value": "Assembly"
                                                        }
                                                      },
                                                      "style": {
                                                        "textStyle": {
                                                          "styleName": "body_small"
                                                        }
                                                      },
                                                      "color": {
                                                        "color": {
                                                          "color": "secondary_text"
                                                        }
                                                      }
                                                    },
                                                    "editorId": "b75c15e1-922d-4020-bd4b-ce1eaed072e2"
                                                  }
                                                ],
                                                "editorId": "3e351d48-4a3e-432b-b0d7-aeaf30e9f9e2"
                                              },
                                              {
                                                "type": "text",
                                                "properties": {
                                                  "content": {
                                                    "stringVal": {
                                                      "value": "35%"
                                                    }
                                                  },
                                                  "style": {
                                                    "textStyle": {
                                                      "styleName": "label_medium"
                                                    }
                                                  },
                                                  "font_weight": {
                                                    "numberVal": {
                                                      "value": 600
                                                    }
                                                  }
                                                },
                                                "editorId": "fb049c46-9031-49ec-a093-b80271b35c39"
                                              }
                                            ],
                                            "editorId": "4132b94e-434b-42e0-b4cb-b7c46918a950"
                                          }
                                        ],
                                        "editorId": "fbbeaba7-4d8f-4756-8c9a-87980973ac0d"
                                      }
                                    ],
                                    "editorId": "09b6033a-adbc-48d0-924f-f637d95f186a"
                                  }
                                ],
                                "editorId": "033cded2-6cf1-4343-ab3d-14e3d217e3c0"
                              }
                            ],
                            "editorId": "8c97d4ab-2640-45e3-918b-5f25301aaa83"
                          }
                        ],
                        "editorId": "e74f106a-312b-41b4-95b4-569deb940d40"
                      },
                      {
                        "type": "column",
                        "properties": {
                          "spacing": {
                            "stringVal": {
                              "value": "md"
                            }
                          },
                          "cross_align": {
                            "align": {
                              "named": "stretch"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "text",
                            "properties": {
                              "content": {
                                "stringVal": {
                                  "value": "Forge Intelligence Brief"
                                }
                              },
                              "style": {
                                "textStyle": {
                                  "styleName": "title_medium"
                                }
                              },
                              "font_weight": {
                                "numberVal": {
                                  "value": 600
                                }
                              }
                            },
                            "editorId": "003714b1-4421-4d5f-bc5a-7c30fa07ee53"
                          },
                          {
                            "type": "@glass_card",
                            "properties": {
                              "padding": {
                                "stringVal": {
                                  "value": "lg"
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "row",
                                "properties": {
                                  "spacing": {
                                    "stringVal": {
                                      "value": "lg"
                                    }
                                  },
                                  "cross_align": {
                                    "align": {
                                      "named": "start"
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "container",
                                    "properties": {
                                      "width": {
                                        "px": {
                                          "value": 48,
                                          "isInfinity": false
                                        }
                                      },
                                      "height": {
                                        "px": {
                                          "value": 48,
                                          "isInfinity": false
                                        }
                                      },
                                      "bg": {
                                        "color": {
                                          "color": "#1A1A1A"
                                        }
                                      },
                                      "radius": {
                                        "radius": {
                                          "topLeft": 0,
                                          "topRight": 0,
                                          "bottomLeft": 0,
                                          "bottomRight": 0,
                                          "token": "lg"
                                        }
                                      },
                                      "align_child": {
                                        "align": {
                                          "named": "center"
                                        }
                                      }
                                    },
                                    "children": [
                                      {
                                        "type": "icon",
                                        "properties": {
                                          "name": {
                                            "icon": {
                                              "name": "auto_awesome_rounded"
                                            }
                                          },
                                          "color": {
                                            "color": {
                                              "color": "#FFFFFF"
                                            }
                                          },
                                          "size": {
                                            "numberVal": {
                                              "value": 24
                                            }
                                          }
                                        },
                                        "editorId": "29dc3857-9b2f-430b-8171-4348a533068b"
                                      }
                                    ],
                                    "editorId": "a71f55dd-622f-4235-8bd6-2362718259df"
                                  },
                                  {
                                    "type": "expanded",
                                    "children": [
                                      {
                                        "type": "column",
                                        "properties": {
                                          "cross_align": {
                                            "align": {
                                              "named": "start"
                                            }
                                          },
                                          "spacing": {
                                            "stringVal": {
                                              "value": "sm"
                                            }
                                          }
                                        },
                                        "children": [
                                          {
                                            "type": "text",
                                            "properties": {
                                              "content": {
                                                "stringVal": {
                                                  "value": "Anomaly detected in Line 4 Hydraulic Pressure"
                                                }
                                              },
                                              "style": {
                                                "textStyle": {
                                                  "styleName": "body_large"
                                                }
                                              },
                                              "font_weight": {
                                                "numberVal": {
                                                  "value": 600
                                                }
                                              },
                                              "color": {
                                                "color": {
                                                  "color": "primary_text"
                                                }
                                              }
                                            },
                                            "editorId": "1bef3a67-f360-4249-a7aa-d4ba03d02ae2"
                                          },
                                          {
                                            "type": "text",
                                            "properties": {
                                              "content": {
                                                "stringVal": {
                                                  "value": "Our predictive model suggests a 70% probability of seal failure within the next 48 hours. Maintenance Agent 'Forge-Beta' has drafted a service ticket for your approval."
                                                }
                                              },
                                              "style": {
                                                "textStyle": {
                                                  "styleName": "body_medium"
                                                }
                                              },
                                              "color": {
                                                "color": {
                                                  "color": "secondary_text"
                                                }
                                              },
                                              "line_height": {
                                                "numberVal": {
                                                  "value": 1.5
                                                }
                                              }
                                            },
                                            "editorId": "d78d1adc-123d-491b-8fd8-4553cffeb449"
                                          },
                                          {
                                            "type": "row",
                                            "properties": {
                                              "spacing": {
                                                "stringVal": {
                                                  "value": "md"
                                                }
                                              },
                                              "padding": {
                                                "edgeInsets": {
                                                  "top": 0,
                                                  "right": 0,
                                                  "bottom": 0,
                                                  "left": 0,
                                                  "topToken": "top",
                                                  "rightToken": "sm",
                                                  "bottomToken": "top",
                                                  "leftToken": "sm"
                                                }
                                              }
                                            },
                                            "children": [
                                              {
                                                "type": "button",
                                                "properties": {
                                                  "content": {
                                                    "stringVal": {
                                                      "value": "Review Ticket"
                                                    }
                                                  },
                                                  "variant": {
                                                    "stringVal": {
                                                      "value": "filled"
                                                    }
                                                  },
                                                  "bg": {
                                                    "color": {
                                                      "color": "primary_text"
                                                    }
                                                  },
                                                  "color": {
                                                    "color": {
                                                      "color": "background"
                                                    }
                                                  },
                                                  "size": {
                                                    "stringVal": {
                                                      "value": "small"
                                                    }
                                                  }
                                                },
                                                "editorId": "eed42b9b-c190-46fc-919c-7bf5b04770b5"
                                              },
                                              {
                                                "type": "button",
                                                "properties": {
                                                  "content": {
                                                    "stringVal": {
                                                      "value": "Dismiss"
                                                    }
                                                  },
                                                  "variant": {
                                                    "stringVal": {
                                                      "value": "text"
                                                    }
                                                  },
                                                  "color": {
                                                    "color": {
                                                      "color": "secondary_text"
                                                    }
                                                  },
                                                  "size": {
                                                    "stringVal": {
                                                      "value": "small"
                                                    }
                                                  }
                                                },
                                                "editorId": "3c0ab13f-ccd5-416f-abdb-9ade8d3ae640"
                                              }
                                            ],
                                            "editorId": "1cb31f48-5df2-44d8-a1dc-425060fa5064"
                                          }
                                        ],
                                        "editorId": "f53d156d-d121-44a6-827e-29d377d7cf87"
                                      }
                                    ],
                                    "editorId": "114bddd3-d0aa-4934-98ee-232059202635"
                                  },
                                  {
                                    "type": "container",
                                    "properties": {
                                      "padding": {
                                        "edgeInsets": {
                                          "top": 0,
                                          "right": 0,
                                          "bottom": 0,
                                          "left": 0,
                                          "token": "md"
                                        }
                                      },
                                      "radius": {
                                        "radius": {
                                          "topLeft": 0,
                                          "topRight": 0,
                                          "bottomLeft": 0,
                                          "bottomRight": 0,
                                          "token": "lg"
                                        }
                                      },
                                      "bg": {
                                        "color": {
                                          "color": "#00000005"
                                        }
                                      }
                                    },
                                    "children": [
                                      {
                                        "type": "row",
                                        "properties": {
                                          "spacing": {
                                            "stringVal": {
                                              "value": "sm"
                                            }
                                          }
                                        },
                                        "children": [
                                          {
                                            "type": "icon",
                                            "properties": {
                                              "name": {
                                                "icon": {
                                                  "name": "timer_rounded"
                                                }
                                              },
                                              "size": {
                                                "numberVal": {
                                                  "value": 16
                                                }
                                              },
                                              "color": {
                                                "color": {
                                                  "color": "secondary_text"
                                                }
                                              }
                                            },
                                            "editorId": "0452d839-2259-44dc-91a8-43ceb7525f07"
                                          },
                                          {
                                            "type": "text",
                                            "properties": {
                                              "content": {
                                                "stringVal": {
                                                  "value": "2m ago"
                                                }
                                              },
                                              "style": {
                                                "textStyle": {
                                                  "styleName": "label_small"
                                                }
                                              },
                                              "color": {
                                                "color": {
                                                  "color": "secondary_text"
                                                }
                                              }
                                            },
                                            "editorId": "d1688e45-b063-48c3-9bdd-efc6779cc6b3"
                                          }
                                        ],
                                        "editorId": "81b219ae-21d9-4c44-b283-a6c1d788dc0e"
                                      }
                                    ],
                                    "editorId": "e7ee4dd5-16e7-4e7a-b34a-9c9a6da9b6a4"
                                  }
                                ],
                                "editorId": "f1968d3f-6847-4c51-a11d-ffd6bd5b7192"
                              }
                            ],
                            "editorId": "9a0e4a28-69bb-46ce-85ff-da6b344cb69c"
                          }
                        ],
                        "editorId": "e1a1b88d-d6ec-4f86-8659-44737e26069f"
                      },
                      {
                        "type": "sizedbox",
                        "properties": {
                          "height": {
                            "stringVal": {
                              "value": "xl"
                            }
                          }
                        },
                        "editorId": "6c635236-a8b9-49e0-b434-bf439452193b"
                      }
                    ],
                    "editorId": "a3aef988-4b44-467b-8ad0-0e3ef2b379e4"
                  }
                ],
                "editorId": "44c86357-5525-4693-b22a-267ea1256936"
              }
            ],
            "editorId": "5f2acbf2-a054-4000-a077-3651d6e22fa3"
          }
        ],
        "editorId": "21963543-07eb-47d3-88ab-f05c93f46c7c"
      }
    ],
    "editorId": "ee232a23-7eee-403c-96a1-8b0e41e6a159"
  },
  "components": [
    {
      "name": "nav_item",
      "root": {
        "type": "container",
        "properties": {
          "padding": {
            "edgeInsets": {
              "top": 0,
              "right": 0,
              "bottom": 0,
              "left": 0,
              "topToken": "md",
              "rightToken": "lg",
              "bottomToken": "md",
              "leftToken": "lg"
            }
          },
          "radius": {
            "radius": {
              "topLeft": 0,
              "topRight": 0,
              "bottomLeft": 0,
              "bottomRight": 0,
              "token": "md"
            }
          },
          "bg": {
            "conditional": {
              "conditionSlot": "active",
              "trueValue": {
                "color": {
                  "color": "#00000008"
                }
              },
              "falseValue": {
                "color": {
                  "color": "transparent"
                }
              }
            }
          }
        },
        "children": [
          {
            "type": "row",
            "properties": {
              "spacing": {
                "stringVal": {
                  "value": "md"
                }
              }
            },
            "children": [
              {
                "type": "icon",
                "properties": {
                  "name": {
                    "slot": {
                      "name": "icon"
                    }
                  },
                  "size": {
                    "numberVal": {
                      "value": 20
                    }
                  },
                  "color": {
                    "conditional": {
                      "conditionSlot": "active",
                      "trueValue": {
                        "color": {
                          "color": "primary_text"
                        }
                      },
                      "falseValue": {
                        "color": {
                          "color": "secondary_text"
                        }
                      }
                    }
                  }
                },
                "editorId": "dc80ed0a-c114-4042-b67d-26fe3bead68f"
              },
              {
                "type": "text",
                "properties": {
                  "content": {
                    "slot": {
                      "name": "label"
                    }
                  },
                  "style": {
                    "textStyle": {
                      "styleName": "label_large"
                    }
                  },
                  "color": {
                    "conditional": {
                      "conditionSlot": "active",
                      "trueValue": {
                        "color": {
                          "color": "primary_text"
                        }
                      },
                      "falseValue": {
                        "color": {
                          "color": "secondary_text"
                        }
                      }
                    }
                  },
                  "font_weight": {
                    "conditional": {
                      "conditionSlot": "active",
                      "trueValue": {
                        "numberVal": {
                          "value": 600
                        }
                      },
                      "falseValue": {
                        "numberVal": {
                          "value": 400
                        }
                      }
                    }
                  }
                },
                "editorId": "7a42a153-9a15-45ae-a3a7-f7c67c305ce4"
              }
            ],
            "editorId": "8fc41924-1d18-4a6d-8fbe-220343ba6a44"
          }
        ],
        "editorId": "715278dd-fe50-4a76-8680-0af154f30c53"
      }
    },
    {
      "name": "glass_card",
      "root": {
        "type": "container",
        "properties": {
          "bg": {
            "color": {
              "color": "#FFFFFF40"
            }
          },
          "backdrop_blur": {
            "numberVal": {
              "value": 20
            }
          },
          "radius": {
            "radius": {
              "topLeft": 0,
              "topRight": 0,
              "bottomLeft": 0,
              "bottomRight": 0,
              "token": "xl"
            }
          },
          "border": {
            "border": {
              "width": 1,
              "color": "#FFFFFF60"
            }
          },
          "padding": {
            "slot": {
              "name": "padding"
            }
          },
          "shadow": {
            "shadow": {
              "color": "#00000005",
              "dx": 0,
              "dy": 4,
              "blur": 12,
              "spread": 0
            }
          }
        },
        "children": [
          {
            "type": "$child",
            "editorId": "c86226d3-b16e-476c-912c-c08aa298aecd"
          }
        ],
        "editorId": "e6cf9fa7-6886-49ee-a2b8-4bcd90ca7fd9"
      }
    },
    {
      "name": "metric_card",
      "root": {
        "type": "@glass_card",
        "properties": {
          "padding": {
            "edgeInsets": {
              "top": 0,
              "right": 0,
              "bottom": 0,
              "left": 0,
              "token": "lg"
            }
          }
        },
        "children": [
          {
            "type": "column",
            "properties": {
              "cross_align": {
                "align": {
                  "named": "start"
                }
              },
              "spacing": {
                "stringVal": {
                  "value": "sm"
                }
              }
            },
            "children": [
              {
                "type": "row",
                "properties": {
                  "align": {
                    "align": {
                      "named": "space_between"
                    }
                  },
                  "cross_align": {
                    "align": {
                      "named": "center"
                    }
                  }
                },
                "children": [
                  {
                    "type": "text",
                    "properties": {
                      "content": {
                        "slot": {
                          "name": "title"
                        }
                      },
                      "style": {
                        "textStyle": {
                          "styleName": "label_medium"
                        }
                      },
                      "color": {
                        "color": {
                          "color": "secondary_text"
                        }
                      }
                    },
                    "editorId": "3a6b55bb-09fe-4ba2-bd4a-bca006f44009"
                  },
                  {
                    "type": "container",
                    "properties": {
                      "padding": {
                        "edgeInsets": {
                          "top": 0,
                          "right": 0,
                          "bottom": 0,
                          "left": 0,
                          "topToken": "xs",
                          "rightToken": "sm",
                          "bottomToken": "xs",
                          "leftToken": "sm"
                        }
                      },
                      "radius": {
                        "radius": {
                          "topLeft": 0,
                          "topRight": 0,
                          "bottomLeft": 0,
                          "bottomRight": 0,
                          "token": "full"
                        }
                      },
                      "bg": {
                        "slot": {
                          "name": "trend_bg"
                        }
                      }
                    },
                    "children": [
                      {
                        "type": "text",
                        "properties": {
                          "content": {
                            "slot": {
                              "name": "trend"
                            }
                          },
                          "style": {
                            "textStyle": {
                              "styleName": "label_small"
                            }
                          },
                          "color": {
                            "slot": {
                              "name": "trend_color"
                            }
                          },
                          "font_weight": {
                            "numberVal": {
                              "value": 600
                            }
                          }
                        },
                        "editorId": "f00b6a49-c319-4b77-8aa4-6211bce72cda"
                      }
                    ],
                    "editorId": "45ebe749-9836-4466-b334-c343ed6f4d1d"
                  }
                ],
                "editorId": "e98ab7b5-975c-4def-b1d1-a1525d900323"
              },
              {
                "type": "text",
                "properties": {
                  "content": {
                    "slot": {
                      "name": "value"
                    }
                  },
                  "style": {
                    "textStyle": {
                      "styleName": "headline_medium"
                    }
                  },
                  "font_weight": {
                    "numberVal": {
                      "value": 700
                    }
                  },
                  "color": {
                    "color": {
                      "color": "primary_text"
                    }
                  }
                },
                "editorId": "34995f40-83b0-4563-a4f3-b287e1b77850"
              },
              {
                "type": "text",
                "properties": {
                  "content": {
                    "slot": {
                      "name": "subtitle"
                    }
                  },
                  "style": {
                    "textStyle": {
                      "styleName": "body_small"
                    }
                  },
                  "color": {
                    "color": {
                      "color": "secondary_text"
                    }
                  }
                },
                "editorId": "282fe4d4-7986-4510-8221-3ff680390c76"
              }
            ],
            "editorId": "b032e24b-2858-42fe-8c36-53de7d128488"
          }
        ],
        "editorId": "ccba1559-5626-4dc7-b7ef-da97cc7e4854"
      }
    }
  ]
}
```

### 2. Quoting Tool

- Frame ID: `6f993ad1-beea-45a3-9d58-9e3b235bb74e`
- Original page prompt: "An interface for generating and managing quotes with clean editorial spacing and a simplified input system."
- Follow-up prompts: _None_

#### DslDocument (JSON)

```json
{
  "root": {
    "type": "scaffold",
    "properties": {
      "bg": {
        "color": {
          "color": "#F2F4F7"
        }
      },
      "safe_area": {
        "boolVal": {
          "value": true
        }
      }
    },
    "children": [
      {
        "type": "stack",
        "children": [
          {
            "type": "container",
            "properties": {
              "width": {
                "px": {
                  "value": "Infinity",
                  "isInfinity": true
                }
              },
              "height": {
                "px": {
                  "value": "Infinity",
                  "isInfinity": true
                }
              }
            },
            "children": [
              {
                "type": "stack",
                "children": [
                  {
                    "type": "container",
                    "properties": {
                      "align": {
                        "align": {
                          "positional": {
                            "x": -0.8,
                            "y": -0.7
                          }
                        }
                      },
                      "width": {
                        "px": {
                          "value": 600,
                          "isInfinity": false
                        }
                      },
                      "height": {
                        "px": {
                          "value": 600,
                          "isInfinity": false
                        }
                      },
                      "gradient": {
                        "gradient": {
                          "type": "GRADIENT_TYPE_RADIAL",
                          "direction": "center",
                          "stops": [
                            {
                              "color": "#E0E7FF80"
                            },
                            {
                              "color": "transparent"
                            }
                          ]
                        }
                      },
                      "blur": {
                        "numberVal": {
                          "value": 80
                        }
                      }
                    },
                    "editorId": "8653a3d8-fcb9-4b4d-a115-0a0b3362e3de"
                  },
                  {
                    "type": "container",
                    "properties": {
                      "align": {
                        "align": {
                          "positional": {
                            "x": 0.9,
                            "y": 0.8
                          }
                        }
                      },
                      "width": {
                        "px": {
                          "value": 500,
                          "isInfinity": false
                        }
                      },
                      "height": {
                        "px": {
                          "value": 500,
                          "isInfinity": false
                        }
                      },
                      "gradient": {
                        "gradient": {
                          "type": "GRADIENT_TYPE_RADIAL",
                          "direction": "center",
                          "stops": [
                            {
                              "color": "#FEE2E260"
                            },
                            {
                              "color": "transparent"
                            }
                          ]
                        }
                      },
                      "blur": {
                        "numberVal": {
                          "value": 100
                        }
                      }
                    },
                    "editorId": "fa071d6a-99e6-4c15-b69f-6b6d9e58877e"
                  }
                ],
                "editorId": "007b7ee3-45bc-49e1-a2ab-f88f7aa1fcd5"
              }
            ],
            "editorId": "0ced69a4-bbd7-4186-b12d-b5253e671c7b"
          },
          {
            "type": "row",
            "properties": {
              "cross_align": {
                "align": {
                  "named": "stretch"
                }
              }
            },
            "children": [
              {
                "type": "container",
                "properties": {
                  "width": {
                    "px": {
                      "value": 260,
                      "isInfinity": false
                    }
                  },
                  "padding": {
                    "edgeInsets": {
                      "top": 0,
                      "right": 0,
                      "bottom": 0,
                      "left": 0,
                      "token": "lg"
                    }
                  },
                  "border": {
                    "borderSided": {
                      "side": "right",
                      "width": 1,
                      "color": "#00000008"
                    }
                  },
                  "bg": {
                    "color": {
                      "color": "#FFFFFF40"
                    }
                  },
                  "backdrop_blur": {
                    "numberVal": {
                      "value": 10
                    }
                  }
                },
                "children": [
                  {
                    "type": "column",
                    "properties": {
                      "cross_align": {
                        "align": {
                          "named": "stretch"
                        }
                      },
                      "spacing": {
                        "stringVal": {
                          "value": "xl"
                        }
                      }
                    },
                    "children": [
                      {
                        "type": "row",
                        "properties": {
                          "spacing": {
                            "stringVal": {
                              "value": "md"
                            }
                          },
                          "padding": {
                            "edgeInsets": {
                              "top": 0,
                              "right": 0,
                              "bottom": 0,
                              "left": 0,
                              "token": "sm"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "container",
                            "properties": {
                              "width": {
                                "px": {
                                  "value": 32,
                                  "isInfinity": false
                                }
                              },
                              "height": {
                                "px": {
                                  "value": 32,
                                  "isInfinity": false
                                }
                              },
                              "bg": {
                                "color": {
                                  "color": "#1A1A1A"
                                }
                              },
                              "radius": {
                                "radius": {
                                  "topLeft": 8,
                                  "topRight": 8,
                                  "bottomLeft": 8,
                                  "bottomRight": 8
                                }
                              },
                              "align_child": {
                                "align": {
                                  "named": "center"
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "icon",
                                "properties": {
                                  "name": {
                                    "icon": {
                                      "name": "memory_rounded"
                                    }
                                  },
                                  "color": {
                                    "color": {
                                      "color": "#FFFFFF"
                                    }
                                  },
                                  "size": {
                                    "numberVal": {
                                      "value": 18
                                    }
                                  }
                                },
                                "editorId": "74bd8560-646a-4603-bb11-9d8bd95df15f"
                              }
                            ],
                            "editorId": "4ff3de33-bacf-40ef-9f1b-906e4ec1fffa"
                          },
                          {
                            "type": "text",
                            "properties": {
                              "content": {
                                "stringVal": {
                                  "value": "FORGE"
                                }
                              },
                              "style": {
                                "textStyle": {
                                  "styleName": "title_medium"
                                }
                              },
                              "font_weight": {
                                "numberVal": {
                                  "value": 700
                                }
                              },
                              "color": {
                                "color": {
                                  "color": "primary_text"
                                }
                              }
                            },
                            "editorId": "88a8b5b9-c55a-428a-b88e-ea4ae3f68547"
                          }
                        ],
                        "editorId": "379287dc-673b-4a62-9170-2424a0e6e58a"
                      },
                      {
                        "type": "column",
                        "properties": {
                          "spacing": {
                            "stringVal": {
                              "value": "xs"
                            }
                          },
                          "cross_align": {
                            "align": {
                              "named": "stretch"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "@nav_item",
                            "properties": {
                              "icon": {
                                "stringVal": {
                                  "value": "space_dashboard_rounded"
                                }
                              },
                              "label": {
                                "stringVal": {
                                  "value": "Insights"
                                }
                              },
                              "active": {
                                "boolVal": {
                                  "value": false
                                }
                              }
                            },
                            "editorId": "d00df271-3526-4243-9ad0-65e486c57ac8"
                          },
                          {
                            "type": "@nav_item",
                            "properties": {
                              "icon": {
                                "stringVal": {
                                  "value": "request_quote_rounded"
                                }
                              },
                              "label": {
                                "stringVal": {
                                  "value": "Quoting Tool"
                                }
                              },
                              "active": {
                                "boolVal": {
                                  "value": true
                                }
                              }
                            },
                            "editorId": "51a6c3bd-df31-4ac8-be5a-62ebf17d379d"
                          },
                          {
                            "type": "@nav_item",
                            "properties": {
                              "icon": {
                                "stringVal": {
                                  "value": "auto_awesome_rounded"
                                }
                              },
                              "label": {
                                "stringVal": {
                                  "value": "AI Knowledge"
                                }
                              },
                              "active": {
                                "boolVal": {
                                  "value": false
                                }
                              }
                            },
                            "editorId": "bcf09375-8252-4be7-9aba-4e6bdf55d530"
                          },
                          {
                            "type": "@nav_item",
                            "properties": {
                              "icon": {
                                "stringVal": {
                                  "value": "psychology_rounded"
                                }
                              },
                              "label": {
                                "stringVal": {
                                  "value": "Agent Pane"
                                }
                              },
                              "active": {
                                "boolVal": {
                                  "value": false
                                }
                              }
                            },
                            "editorId": "f2b58799-ca16-4dc0-8fa2-ad7a757e7e3c"
                          }
                        ],
                        "editorId": "f6abdea2-23e2-4630-b55c-0d66568d3cc0"
                      },
                      {
                        "type": "spacer",
                        "editorId": "34b55450-8c4c-4a82-a5a3-2caa93631df3"
                      },
                      {
                        "type": "container",
                        "properties": {
                          "padding": {
                            "edgeInsets": {
                              "top": 0,
                              "right": 0,
                              "bottom": 0,
                              "left": 0,
                              "token": "md"
                            }
                          },
                          "radius": {
                            "radius": {
                              "topLeft": 0,
                              "topRight": 0,
                              "bottomLeft": 0,
                              "bottomRight": 0,
                              "token": "lg"
                            }
                          },
                          "bg": {
                            "color": {
                              "color": "#00000005"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "row",
                            "properties": {
                              "spacing": {
                                "stringVal": {
                                  "value": "md"
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "avatar",
                                "properties": {
                                  "text": {
                                    "stringVal": {
                                      "value": "JD"
                                    }
                                  },
                                  "bg": {
                                    "color": {
                                      "color": "#1A1A1A"
                                    }
                                  },
                                  "color": {
                                    "color": {
                                      "color": "#FFFFFF"
                                    }
                                  },
                                  "size": {
                                    "numberVal": {
                                      "value": 32
                                    }
                                  }
                                },
                                "editorId": "48b3765e-61f2-4e66-a4dd-00b865acc083"
                              },
                              {
                                "type": "expanded",
                                "children": [
                                  {
                                    "type": "column",
                                    "properties": {
                                      "cross_align": {
                                        "align": {
                                          "named": "start"
                                        }
                                      }
                                    },
                                    "children": [
                                      {
                                        "type": "text",
                                        "properties": {
                                          "content": {
                                            "stringVal": {
                                              "value": "Jane Doe"
                                            }
                                          },
                                          "style": {
                                            "textStyle": {
                                              "styleName": "body_small"
                                            }
                                          },
                                          "font_weight": {
                                            "numberVal": {
                                              "value": 600
                                            }
                                          },
                                          "color": {
                                            "color": {
                                              "color": "primary_text"
                                            }
                                          }
                                        },
                                        "editorId": "5d84cddb-fe99-4f56-8944-d445518a67c8"
                                      },
                                      {
                                        "type": "text",
                                        "properties": {
                                          "content": {
                                            "stringVal": {
                                              "value": "Admin Access"
                                            }
                                          },
                                          "style": {
                                            "textStyle": {
                                              "styleName": "label_small"
                                            }
                                          },
                                          "color": {
                                            "color": {
                                              "color": "secondary_text"
                                            }
                                          }
                                        },
                                        "editorId": "0ab337e3-4448-42e0-896f-1655e1b14b95"
                                      }
                                    ],
                                    "editorId": "39aa4fbb-b149-43f6-aeef-486aa84287f7"
                                  }
                                ],
                                "editorId": "2dd7bb60-f473-479f-8b43-69ba587ab91f"
                              }
                            ],
                            "editorId": "7783835c-759c-40c8-8a22-2349d8d4e496"
                          }
                        ],
                        "editorId": "cbfcf506-373f-4419-9685-21d4046ee116"
                      }
                    ],
                    "editorId": "2d121895-f0b3-4a94-82dd-9d5505be14ed"
                  }
                ],
                "editorId": "14086504-ae6d-42ed-b325-ae16fa94ce4b"
              },
              {
                "type": "expanded",
                "children": [
                  {
                    "type": "column",
                    "properties": {
                      "scroll": {
                        "boolVal": {
                          "value": true
                        }
                      },
                      "padding": {
                        "edgeInsets": {
                          "top": 40,
                          "right": 40,
                          "bottom": 40,
                          "left": 40
                        }
                      },
                      "spacing": {
                        "stringVal": {
                          "value": "xl"
                        }
                      }
                    },
                    "children": [
                      {
                        "type": "row",
                        "properties": {
                          "align": {
                            "align": {
                              "named": "space_between"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "column",
                            "properties": {
                              "cross_align": {
                                "align": {
                                  "named": "start"
                                }
                              },
                              "spacing": {
                                "stringVal": {
                                  "value": "xs"
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "text",
                                "properties": {
                                  "content": {
                                    "stringVal": {
                                      "value": "Quoting Tool"
                                    }
                                  },
                                  "style": {
                                    "textStyle": {
                                      "styleName": "headline_medium"
                                    }
                                  },
                                  "font_weight": {
                                    "numberVal": {
                                      "value": 700
                                    }
                                  },
                                  "color": {
                                    "color": {
                                      "color": "primary_text"
                                    }
                                  }
                                },
                                "editorId": "b48d5b90-90e8-4364-9ef8-ff89764edd98"
                              },
                              {
                                "type": "text",
                                "properties": {
                                  "content": {
                                    "stringVal": {
                                      "value": "Generate precise manufacturing estimates using Forge AI."
                                    }
                                  },
                                  "style": {
                                    "textStyle": {
                                      "styleName": "body_medium"
                                    }
                                  },
                                  "color": {
                                    "color": {
                                      "color": "secondary_text"
                                    }
                                  }
                                },
                                "editorId": "7d008d94-7191-4ccd-a7fd-d2bf06b39467"
                              }
                            ],
                            "editorId": "61e28140-410d-440d-8b89-3ecd18f061b9"
                          },
                          {
                            "type": "button",
                            "properties": {
                              "content": {
                                "stringVal": {
                                  "value": "New Quote"
                                }
                              },
                              "icon": {
                                "icon": {
                                  "name": "add_rounded"
                                }
                              },
                              "bg": {
                                "color": {
                                  "color": "#1A1A1A"
                                }
                              },
                              "color": {
                                "color": {
                                  "color": "#FFFFFF"
                                }
                              },
                              "radius": {
                                "radius": {
                                  "topLeft": 0,
                                  "topRight": 0,
                                  "bottomLeft": 0,
                                  "bottomRight": 0,
                                  "token": "md"
                                }
                              },
                              "content_padding": {
                                "edgeInsets": {
                                  "top": 0,
                                  "right": 0,
                                  "bottom": 0,
                                  "left": 0,
                                  "topToken": "lg",
                                  "rightToken": "md",
                                  "bottomToken": "lg",
                                  "leftToken": "md"
                                }
                              }
                            },
                            "editorId": "dea9c25a-b1d9-4d92-95d3-ad1f9ff30f48"
                          }
                        ],
                        "editorId": "bb7b3c3e-f0a8-44e7-a332-7ea5f1702f94"
                      },
                      {
                        "type": "row",
                        "properties": {
                          "spacing": {
                            "stringVal": {
                              "value": "lg"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "expanded",
                            "properties": {
                              "flex": {
                                "numberVal": {
                                  "value": 1
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "@glass_card",
                                "properties": {
                                  "padding": {
                                    "stringVal": {
                                      "value": "lg"
                                    }
                                  },
                                  "margin": {
                                    "numberVal": {
                                      "value": 0
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "column",
                                    "properties": {
                                      "cross_align": {
                                        "align": {
                                          "named": "start"
                                        }
                                      },
                                      "spacing": {
                                        "stringVal": {
                                          "value": "sm"
                                        }
                                      }
                                    },
                                    "children": [
                                      {
                                        "type": "text",
                                        "properties": {
                                          "content": {
                                            "stringVal": {
                                              "value": "Draft Quotes"
                                            }
                                          },
                                          "style": {
                                            "textStyle": {
                                              "styleName": "label_medium"
                                            }
                                          },
                                          "color": {
                                            "color": {
                                              "color": "secondary_text"
                                            }
                                          }
                                        },
                                        "editorId": "7f71c395-de65-4c02-84d7-cd033d116dc1"
                                      },
                                      {
                                        "type": "text",
                                        "properties": {
                                          "content": {
                                            "stringVal": {
                                              "value": "12"
                                            }
                                          },
                                          "style": {
                                            "textStyle": {
                                              "styleName": "headline_small"
                                            }
                                          },
                                          "font_weight": {
                                            "numberVal": {
                                              "value": 700
                                            }
                                          },
                                          "color": {
                                            "color": {
                                              "color": "primary_text"
                                            }
                                          }
                                        },
                                        "editorId": "f20af716-eae5-48dd-b382-c0cf5d61b2b0"
                                      }
                                    ],
                                    "editorId": "0bb9a10a-e66b-43c1-8b69-639c3080723c"
                                  }
                                ],
                                "editorId": "96991839-370a-40c6-a4f9-42d9433f3c71"
                              }
                            ],
                            "editorId": "d2cdb312-3eb0-4ced-b9ee-abb01a398cf2"
                          },
                          {
                            "type": "expanded",
                            "properties": {
                              "flex": {
                                "numberVal": {
                                  "value": 1
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "@glass_card",
                                "properties": {
                                  "padding": {
                                    "stringVal": {
                                      "value": "lg"
                                    }
                                  },
                                  "margin": {
                                    "numberVal": {
                                      "value": 0
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "column",
                                    "properties": {
                                      "cross_align": {
                                        "align": {
                                          "named": "start"
                                        }
                                      },
                                      "spacing": {
                                        "stringVal": {
                                          "value": "sm"
                                        }
                                      }
                                    },
                                    "children": [
                                      {
                                        "type": "text",
                                        "properties": {
                                          "content": {
                                            "stringVal": {
                                              "value": "Pending Approval"
                                            }
                                          },
                                          "style": {
                                            "textStyle": {
                                              "styleName": "label_medium"
                                            }
                                          },
                                          "color": {
                                            "color": {
                                              "color": "secondary_text"
                                            }
                                          }
                                        },
                                        "editorId": "4a52acfb-5916-4b0b-b944-d7dd197a7582"
                                      },
                                      {
                                        "type": "text",
                                        "properties": {
                                          "content": {
                                            "stringVal": {
                                              "value": "08"
                                            }
                                          },
                                          "style": {
                                            "textStyle": {
                                              "styleName": "headline_small"
                                            }
                                          },
                                          "font_weight": {
                                            "numberVal": {
                                              "value": 700
                                            }
                                          },
                                          "color": {
                                            "color": {
                                              "color": "primary_text"
                                            }
                                          }
                                        },
                                        "editorId": "dc8e4506-42c6-414f-9871-42db963edc8b"
                                      }
                                    ],
                                    "editorId": "f497f624-31cf-4888-bdfc-a73d583c4bcf"
                                  }
                                ],
                                "editorId": "9fd25d11-ea4e-43a4-adae-a73fc2d72076"
                              }
                            ],
                            "editorId": "dd42efac-8888-4933-a3de-efdc8fe683c5"
                          },
                          {
                            "type": "expanded",
                            "properties": {
                              "flex": {
                                "numberVal": {
                                  "value": 1
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "@glass_card",
                                "properties": {
                                  "padding": {
                                    "stringVal": {
                                      "value": "lg"
                                    }
                                  },
                                  "margin": {
                                    "numberVal": {
                                      "value": 0
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "column",
                                    "properties": {
                                      "cross_align": {
                                        "align": {
                                          "named": "start"
                                        }
                                      },
                                      "spacing": {
                                        "stringVal": {
                                          "value": "sm"
                                        }
                                      }
                                    },
                                    "children": [
                                      {
                                        "type": "text",
                                        "properties": {
                                          "content": {
                                            "stringVal": {
                                              "value": "Conversion Rate"
                                            }
                                          },
                                          "style": {
                                            "textStyle": {
                                              "styleName": "label_medium"
                                            }
                                          },
                                          "color": {
                                            "color": {
                                              "color": "secondary_text"
                                            }
                                          }
                                        },
                                        "editorId": "943c0d34-f6b0-4dd6-a338-fc3ccc9eb1f6"
                                      },
                                      {
                                        "type": "text",
                                        "properties": {
                                          "content": {
                                            "stringVal": {
                                              "value": "64.2%"
                                            }
                                          },
                                          "style": {
                                            "textStyle": {
                                              "styleName": "headline_small"
                                            }
                                          },
                                          "font_weight": {
                                            "numberVal": {
                                              "value": 700
                                            }
                                          },
                                          "color": {
                                            "color": {
                                              "color": "primary_text"
                                            }
                                          }
                                        },
                                        "editorId": "320cb0a3-5fe9-4e14-ba76-c6130c56dd3b"
                                      }
                                    ],
                                    "editorId": "03c71fcc-ab6c-4df4-859f-3c167b1a1133"
                                  }
                                ],
                                "editorId": "98c3f8a5-0b44-4f82-b32f-f70276075305"
                              }
                            ],
                            "editorId": "1c4d275e-2855-4a8b-af4b-c75c1da800b3"
                          }
                        ],
                        "editorId": "c3338216-4750-48d9-8354-615195694f6a"
                      },
                      {
                        "type": "@glass_card",
                        "properties": {
                          "padding": {
                            "numberVal": {
                              "value": 0
                            }
                          },
                          "margin": {
                            "numberVal": {
                              "value": 0
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "column",
                            "properties": {
                              "cross_align": {
                                "align": {
                                  "named": "stretch"
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "container",
                                "properties": {
                                  "padding": {
                                    "edgeInsets": {
                                      "top": 0,
                                      "right": 0,
                                      "bottom": 0,
                                      "left": 0,
                                      "topToken": "md",
                                      "rightToken": "lg",
                                      "bottomToken": "md",
                                      "leftToken": "lg"
                                    }
                                  },
                                  "border": {
                                    "borderSided": {
                                      "side": "bottom",
                                      "width": 1,
                                      "color": "#00000008"
                                    }
                                  },
                                  "bg": {
                                    "color": {
                                      "color": "#00000003"
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "row",
                                    "properties": {
                                      "spacing": {
                                        "stringVal": {
                                          "value": "lg"
                                        }
                                      }
                                    },
                                    "children": [
                                      {
                                        "type": "expanded",
                                        "properties": {
                                          "flex": {
                                            "numberVal": {
                                              "value": 2
                                            }
                                          }
                                        },
                                        "children": [
                                          {
                                            "type": "text",
                                            "properties": {
                                              "content": {
                                                "stringVal": {
                                                  "value": "Client & ID"
                                                }
                                              },
                                              "style": {
                                                "textStyle": {
                                                  "styleName": "label_small"
                                                }
                                              },
                                              "color": {
                                                "color": {
                                                  "color": "secondary_text"
                                                }
                                              },
                                              "font_weight": {
                                                "numberVal": {
                                                  "value": 600
                                                }
                                              }
                                            },
                                            "editorId": "34c72b23-81af-4671-a48e-56a82f3884cd"
                                          }
                                        ],
                                        "editorId": "c98c894b-e5a6-4a37-be60-5cb0e0dbf7fd"
                                      },
                                      {
                                        "type": "expanded",
                                        "properties": {
                                          "flex": {
                                            "numberVal": {
                                              "value": 2
                                            }
                                          }
                                        },
                                        "children": [
                                          {
                                            "type": "text",
                                            "properties": {
                                              "content": {
                                                "stringVal": {
                                                  "value": "Project Name"
                                                }
                                              },
                                              "style": {
                                                "textStyle": {
                                                  "styleName": "label_small"
                                                }
                                              },
                                              "color": {
                                                "color": {
                                                  "color": "secondary_text"
                                                }
                                              },
                                              "font_weight": {
                                                "numberVal": {
                                                  "value": 600
                                                }
                                              }
                                            },
                                            "editorId": "55081f66-79d6-49e0-9076-50c23bff6ae7"
                                          }
                                        ],
                                        "editorId": "56aeb816-367c-443f-8c39-682523ec1810"
                                      },
                                      {
                                        "type": "expanded",
                                        "properties": {
                                          "flex": {
                                            "numberVal": {
                                              "value": 1
                                            }
                                          }
                                        },
                                        "children": [
                                          {
                                            "type": "text",
                                            "properties": {
                                              "content": {
                                                "stringVal": {
                                                  "value": "Date"
                                                }
                                              },
                                              "style": {
                                                "textStyle": {
                                                  "styleName": "label_small"
                                                }
                                              },
                                              "color": {
                                                "color": {
                                                  "color": "secondary_text"
                                                }
                                              },
                                              "font_weight": {
                                                "numberVal": {
                                                  "value": 600
                                                }
                                              }
                                            },
                                            "editorId": "6fb73662-74c1-4c6f-bc3c-2f0d37baaeea"
                                          }
                                        ],
                                        "editorId": "90a946f8-d907-499c-8eaa-378ea1cab954"
                                      },
                                      {
                                        "type": "expanded",
                                        "properties": {
                                          "flex": {
                                            "numberVal": {
                                              "value": 1
                                            }
                                          }
                                        },
                                        "children": [
                                          {
                                            "type": "text",
                                            "properties": {
                                              "content": {
                                                "stringVal": {
                                                  "value": "Total Amount"
                                                }
                                              },
                                              "style": {
                                                "textStyle": {
                                                  "styleName": "label_small"
                                                }
                                              },
                                              "color": {
                                                "color": {
                                                  "color": "secondary_text"
                                                }
                                              },
                                              "font_weight": {
                                                "numberVal": {
                                                  "value": 600
                                                }
                                              }
                                            },
                                            "editorId": "e6a337db-f911-4f0d-9253-7d19743c8e28"
                                          }
                                        ],
                                        "editorId": "939d2451-3228-49f1-9f20-3b60cde4e487"
                                      },
                                      {
                                        "type": "container",
                                        "properties": {
                                          "width": {
                                            "px": {
                                              "value": 100,
                                              "isInfinity": false
                                            }
                                          }
                                        },
                                        "children": [
                                          {
                                            "type": "text",
                                            "properties": {
                                              "content": {
                                                "stringVal": {
                                                  "value": "Status"
                                                }
                                              },
                                              "style": {
                                                "textStyle": {
                                                  "styleName": "label_small"
                                                }
                                              },
                                              "color": {
                                                "color": {
                                                  "color": "secondary_text"
                                                }
                                              },
                                              "font_weight": {
                                                "numberVal": {
                                                  "value": 600
                                                }
                                              }
                                            },
                                            "editorId": "21aead7a-6333-4527-b4c0-566c1971d495"
                                          }
                                        ],
                                        "editorId": "d58e68b8-b089-4cdc-b23b-747225bab389"
                                      },
                                      {
                                        "type": "sizedbox",
                                        "properties": {
                                          "width": {
                                            "px": {
                                              "value": 40,
                                              "isInfinity": false
                                            }
                                          }
                                        },
                                        "editorId": "f6198fc2-67db-498e-9972-b6c549139c1f"
                                      }
                                    ],
                                    "editorId": "26cd01b2-2d74-44f8-90ad-7d534192a92a"
                                  }
                                ],
                                "editorId": "53c4bac6-944c-4f85-87ad-c8dc06acaac9"
                              },
                              {
                                "type": "@quote_row",
                                "properties": {
                                  "client": {
                                    "stringVal": {
                                      "value": "Aerospace Dynamics"
                                    }
                                  },
                                  "id": {
                                    "stringVal": {
                                      "value": "QT-8821"
                                    }
                                  },
                                  "project": {
                                    "stringVal": {
                                      "value": "Titanium Turbine Housing"
                                    }
                                  },
                                  "date": {
                                    "stringVal": {
                                      "value": "Oct 24, 2023"
                                    }
                                  },
                                  "amount": {
                                    "stringVal": {
                                      "value": "$12,450.00"
                                    }
                                  },
                                  "status": {
                                    "stringVal": {
                                      "value": "Draft"
                                    }
                                  },
                                  "status_bg": {
                                    "color": {
                                      "color": "#F3F4F6"
                                    }
                                  },
                                  "status_color": {
                                    "color": {
                                      "color": "#374151"
                                    }
                                  }
                                },
                                "editorId": "88f4f7cf-021d-4d27-ab19-b60a9930f1b8"
                              },
                              {
                                "type": "@quote_row",
                                "properties": {
                                  "client": {
                                    "stringVal": {
                                      "value": "Precision Medical"
                                    }
                                  },
                                  "id": {
                                    "stringVal": {
                                      "value": "QT-8819"
                                    }
                                  },
                                  "project": {
                                    "stringVal": {
                                      "value": "Surgical Grade Implants"
                                    }
                                  },
                                  "date": {
                                    "stringVal": {
                                      "value": "Oct 22, 2023"
                                    }
                                  },
                                  "amount": {
                                    "stringVal": {
                                      "value": "$4,200.00"
                                    }
                                  },
                                  "status": {
                                    "stringVal": {
                                      "value": "Pending"
                                    }
                                  },
                                  "status_bg": {
                                    "color": {
                                      "color": "#EFF6FF"
                                    }
                                  },
                                  "status_color": {
                                    "color": {
                                      "color": "#1D4ED8"
                                    }
                                  }
                                },
                                "editorId": "57f79583-3b57-4ad1-b560-ca583952fd65"
                              },
                              {
                                "type": "@quote_row",
                                "properties": {
                                  "client": {
                                    "stringVal": {
                                      "value": "Global Robotics"
                                    }
                                  },
                                  "id": {
                                    "stringVal": {
                                      "value": "QT-8815"
                                    }
                                  },
                                  "project": {
                                    "stringVal": {
                                      "value": "Custom Actuator Assembly"
                                    }
                                  },
                                  "date": {
                                    "stringVal": {
                                      "value": "Oct 20, 2023"
                                    }
                                  },
                                  "amount": {
                                    "stringVal": {
                                      "value": "$31,000.00"
                                    }
                                  },
                                  "status": {
                                    "stringVal": {
                                      "value": "Sent"
                                    }
                                  },
                                  "status_bg": {
                                    "color": {
                                      "color": "#ECFDF5"
                                    }
                                  },
                                  "status_color": {
                                    "color": {
                                      "color": "#059669"
                                    }
                                  }
                                },
                                "editorId": "d1aa50b6-7055-4bc5-a126-bb14454e225e"
                              },
                              {
                                "type": "@quote_row",
                                "properties": {
                                  "client": {
                                    "stringVal": {
                                      "value": "Automotive Core"
                                    }
                                  },
                                  "id": {
                                    "stringVal": {
                                      "value": "QT-8812"
                                    }
                                  },
                                  "project": {
                                    "stringVal": {
                                      "value": "Engine Block Prototype"
                                    }
                                  },
                                  "date": {
                                    "stringVal": {
                                      "value": "Oct 18, 2023"
                                    }
                                  },
                                  "amount": {
                                    "stringVal": {
                                      "value": "$8,900.00"
                                    }
                                  },
                                  "status": {
                                    "stringVal": {
                                      "value": "Expired"
                                    }
                                  },
                                  "status_bg": {
                                    "color": {
                                      "color": "#FEF2F2"
                                    }
                                  },
                                  "status_color": {
                                    "color": {
                                      "color": "#B91C1C"
                                    }
                                  }
                                },
                                "editorId": "4eb5f3e9-b260-4704-a1b8-e85195d02540"
                              },
                              {
                                "type": "@quote_row",
                                "properties": {
                                  "client": {
                                    "stringVal": {
                                      "value": "NextGen Energy"
                                    }
                                  },
                                  "id": {
                                    "stringVal": {
                                      "value": "QT-8804"
                                    }
                                  },
                                  "project": {
                                    "stringVal": {
                                      "value": "Turbine Blade Refurbish"
                                    }
                                  },
                                  "date": {
                                    "stringVal": {
                                      "value": "Oct 15, 2023"
                                    }
                                  },
                                  "amount": {
                                    "stringVal": {
                                      "value": "$15,600.00"
                                    }
                                  },
                                  "status": {
                                    "stringVal": {
                                      "value": "Sent"
                                    }
                                  },
                                  "status_bg": {
                                    "color": {
                                      "color": "#ECFDF5"
                                    }
                                  },
                                  "status_color": {
                                    "color": {
                                      "color": "#059669"
                                    }
                                  }
                                },
                                "editorId": "83f7fb84-f8af-4cd8-92ba-ee305483d52b"
                              }
                            ],
                            "editorId": "021d8aaf-89b4-41d3-8089-4f701e3515d9"
                          }
                        ],
                        "editorId": "6cbfeb57-8532-4fe3-925c-9128bbc4132c"
                      },
                      {
                        "type": "container",
                        "properties": {
                          "padding": {
                            "edgeInsets": {
                              "top": 0,
                              "right": 0,
                              "bottom": 0,
                              "left": 0,
                              "token": "lg"
                            }
                          },
                          "radius": {
                            "radius": {
                              "topLeft": 0,
                              "topRight": 0,
                              "bottomLeft": 0,
                              "bottomRight": 0,
                              "token": "lg"
                            }
                          },
                          "bg": {
                            "color": {
                              "color": "#1A1A1A"
                            }
                          },
                          "margin": {
                            "edgeInsets": {
                              "top": 0,
                              "right": 0,
                              "bottom": 0,
                              "left": 0,
                              "bottomToken": "xl"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "row",
                            "properties": {
                              "spacing": {
                                "stringVal": {
                                  "value": "lg"
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "container",
                                "properties": {
                                  "width": {
                                    "px": {
                                      "value": 48,
                                      "isInfinity": false
                                    }
                                  },
                                  "height": {
                                    "px": {
                                      "value": 48,
                                      "isInfinity": false
                                    }
                                  },
                                  "radius": {
                                    "radius": {
                                      "topLeft": 0,
                                      "topRight": 0,
                                      "bottomLeft": 0,
                                      "bottomRight": 0,
                                      "token": "md"
                                    }
                                  },
                                  "bg": {
                                    "color": {
                                      "color": "#FFFFFF15"
                                    }
                                  },
                                  "align_child": {
                                    "align": {
                                      "named": "center"
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "icon",
                                    "properties": {
                                      "name": {
                                        "icon": {
                                          "name": "auto_awesome_rounded"
                                        }
                                      },
                                      "color": {
                                        "color": {
                                          "color": "#FFFFFF"
                                        }
                                      },
                                      "size": {
                                        "numberVal": {
                                          "value": 24
                                        }
                                      }
                                    },
                                    "editorId": "e76feb43-3807-435e-94de-353090fe6c14"
                                  }
                                ],
                                "editorId": "78053349-cbfa-4de0-8a5c-66e3e0b65c95"
                              },
                              {
                                "type": "expanded",
                                "children": [
                                  {
                                    "type": "column",
                                    "properties": {
                                      "cross_align": {
                                        "align": {
                                          "named": "start"
                                        }
                                      },
                                      "spacing": {
                                        "stringVal": {
                                          "value": "xs"
                                        }
                                      }
                                    },
                                    "children": [
                                      {
                                        "type": "text",
                                        "properties": {
                                          "content": {
                                            "stringVal": {
                                              "value": "Forge AI Insight"
                                            }
                                          },
                                          "style": {
                                            "textStyle": {
                                              "styleName": "title_small"
                                            }
                                          },
                                          "color": {
                                            "color": {
                                              "color": "#FFFFFF"
                                            }
                                          },
                                          "font_weight": {
                                            "numberVal": {
                                              "value": 600
                                            }
                                          }
                                        },
                                        "editorId": "232dbd6c-60d7-4257-a7cd-c84eb6e17a5f"
                                      },
                                      {
                                        "type": "text",
                                        "properties": {
                                          "content": {
                                            "stringVal": {
                                              "value": "Based on current material costs for Titanium Grade 5, we suggest increasing the margin on QT-8821 by 4% to maintain target profitability."
                                            }
                                          },
                                          "style": {
                                            "textStyle": {
                                              "styleName": "body_small"
                                            }
                                          },
                                          "color": {
                                            "color": {
                                              "color": "#FFFFFFCC"
                                            }
                                          }
                                        },
                                        "editorId": "9ae06ef5-09bc-4f1d-953b-28e7d46bd9e5"
                                      }
                                    ],
                                    "editorId": "6b28b5a5-a9c1-477c-87b7-061997f433ae"
                                  }
                                ],
                                "editorId": "3dbb7f1c-a5d0-4c3d-a87e-b4d9f0da7456"
                              },
                              {
                                "type": "button",
                                "properties": {
                                  "content": {
                                    "stringVal": {
                                      "value": "Apply Suggestion"
                                    }
                                  },
                                  "variant": {
                                    "stringVal": {
                                      "value": "outlined"
                                    }
                                  },
                                  "color": {
                                    "color": {
                                      "color": "#FFFFFF"
                                    }
                                  },
                                  "font_size": {
                                    "numberVal": {
                                      "value": 13
                                    }
                                  },
                                  "radius": {
                                    "radius": {
                                      "topLeft": 0,
                                      "topRight": 0,
                                      "bottomLeft": 0,
                                      "bottomRight": 0,
                                      "token": "md"
                                    }
                                  }
                                },
                                "editorId": "cba16b61-3b32-4897-89d1-e3c243b672ee"
                              }
                            ],
                            "editorId": "f63ffc75-a3e8-450a-b913-6749c31fc8ea"
                          }
                        ],
                        "editorId": "2ecde49e-dacb-4dfc-921d-363f271747f0"
                      }
                    ],
                    "editorId": "7fd9ed1e-1bd2-4252-9afc-454b25afe746"
                  }
                ],
                "editorId": "f2646c5a-6785-4363-8d54-6cd818d4edaf"
              }
            ],
            "editorId": "235160f6-2602-4dd0-b901-c97193bba2dd"
          }
        ],
        "editorId": "6ebbb294-362c-4eca-9310-704da4e3d5ae"
      }
    ],
    "editorId": "bf739299-590c-4979-abe7-63e4075876dc"
  },
  "components": [
    {
      "name": "nav_item",
      "root": {
        "type": "container",
        "properties": {
          "padding": {
            "edgeInsets": {
              "top": 0,
              "right": 0,
              "bottom": 0,
              "left": 0,
              "token": "md"
            }
          },
          "radius": {
            "radius": {
              "topLeft": 0,
              "topRight": 0,
              "bottomLeft": 0,
              "bottomRight": 0,
              "token": "md"
            }
          },
          "bg": {
            "conditional": {
              "conditionSlot": "active",
              "trueValue": {
                "color": {
                  "color": "#0000000A"
                }
              },
              "falseValue": {
                "color": {
                  "color": "transparent"
                }
              }
            }
          }
        },
        "children": [
          {
            "type": "row",
            "properties": {
              "spacing": {
                "stringVal": {
                  "value": "md"
                }
              }
            },
            "children": [
              {
                "type": "icon",
                "properties": {
                  "name": {
                    "slot": {
                      "name": "icon"
                    }
                  },
                  "size": {
                    "numberVal": {
                      "value": 20
                    }
                  },
                  "color": {
                    "conditional": {
                      "conditionSlot": "active",
                      "trueValue": {
                        "color": {
                          "color": "primary_text"
                        }
                      },
                      "falseValue": {
                        "color": {
                          "color": "secondary_text"
                        }
                      }
                    }
                  }
                },
                "editorId": "51882607-47f3-42cc-9156-445f947dcd9e"
              },
              {
                "type": "text",
                "properties": {
                  "content": {
                    "slot": {
                      "name": "label"
                    }
                  },
                  "style": {
                    "textStyle": {
                      "styleName": "body_medium"
                    }
                  },
                  "color": {
                    "conditional": {
                      "conditionSlot": "active",
                      "trueValue": {
                        "color": {
                          "color": "primary_text"
                        }
                      },
                      "falseValue": {
                        "color": {
                          "color": "secondary_text"
                        }
                      }
                    }
                  },
                  "font_weight": {
                    "conditional": {
                      "conditionSlot": "active",
                      "trueValue": {
                        "numberVal": {
                          "value": 600
                        }
                      },
                      "falseValue": {
                        "numberVal": {
                          "value": 400
                        }
                      }
                    }
                  }
                },
                "editorId": "3e3a2873-9948-4079-9fe0-3fcebb8668a4"
              }
            ],
            "editorId": "a049446f-c8ba-421d-bc5b-f1d00681f215"
          }
        ],
        "editorId": "8b6090ab-04c0-4efc-a78a-c9b6653b3647"
      }
    },
    {
      "name": "glass_card",
      "root": {
        "type": "container",
        "properties": {
          "bg": {
            "color": {
              "color": "#FFFFFF80"
            }
          },
          "backdrop_blur": {
            "numberVal": {
              "value": 20
            }
          },
          "radius": {
            "radius": {
              "topLeft": 0,
              "topRight": 0,
              "bottomLeft": 0,
              "bottomRight": 0,
              "token": "lg"
            }
          },
          "border": {
            "border": {
              "width": 1,
              "color": "#FFFFFF40"
            }
          },
          "padding": {
            "slot": {
              "name": "padding"
            }
          },
          "margin": {
            "slot": {
              "name": "margin"
            }
          },
          "shadow": {
            "shadow": {
              "color": "#00000005",
              "dx": 0,
              "dy": 4,
              "blur": 12,
              "spread": 0
            }
          }
        },
        "children": [
          {
            "type": "$child",
            "editorId": "eb5becb9-371d-4abc-8192-1b29ee71e57c"
          }
        ],
        "editorId": "de04363d-c3d0-4f40-bc06-913858c9ae7d"
      }
    },
    {
      "name": "status_chip",
      "root": {
        "type": "container",
        "properties": {
          "padding": {
            "edgeInsets": {
              "top": 4,
              "right": 12,
              "bottom": 4,
              "left": 12
            }
          },
          "radius": {
            "radius": {
              "topLeft": 0,
              "topRight": 0,
              "bottomLeft": 0,
              "bottomRight": 0,
              "token": "full"
            }
          },
          "bg": {
            "slot": {
              "name": "bg"
            }
          }
        },
        "children": [
          {
            "type": "text",
            "properties": {
              "content": {
                "slot": {
                  "name": "label"
                }
              },
              "style": {
                "textStyle": {
                  "styleName": "label_small"
                }
              },
              "color": {
                "slot": {
                  "name": "color"
                }
              },
              "font_weight": {
                "numberVal": {
                  "value": 600
                }
              }
            },
            "editorId": "e3ac4272-0528-416a-bedf-8c87be4df99a"
          }
        ],
        "editorId": "730b7b07-25fb-42e7-a70f-9ae79de29ca2"
      }
    },
    {
      "name": "quote_row",
      "root": {
        "type": "container",
        "properties": {
          "padding": {
            "edgeInsets": {
              "top": 0,
              "right": 0,
              "bottom": 0,
              "left": 0,
              "topToken": "md",
              "rightToken": "lg",
              "bottomToken": "md",
              "leftToken": "lg"
            }
          },
          "border": {
            "borderSided": {
              "side": "bottom",
              "width": 1,
              "color": "#00000008"
            }
          }
        },
        "children": [
          {
            "type": "row",
            "properties": {
              "spacing": {
                "stringVal": {
                  "value": "lg"
                }
              }
            },
            "children": [
              {
                "type": "expanded",
                "properties": {
                  "flex": {
                    "numberVal": {
                      "value": 2
                    }
                  }
                },
                "children": [
                  {
                    "type": "column",
                    "properties": {
                      "cross_align": {
                        "align": {
                          "named": "start"
                        }
                      },
                      "spacing": {
                        "stringVal": {
                          "value": "xs"
                        }
                      }
                    },
                    "children": [
                      {
                        "type": "text",
                        "properties": {
                          "content": {
                            "slot": {
                              "name": "client"
                            }
                          },
                          "style": {
                            "textStyle": {
                              "styleName": "body_medium"
                            }
                          },
                          "font_weight": {
                            "numberVal": {
                              "value": 600
                            }
                          },
                          "color": {
                            "color": {
                              "color": "primary_text"
                            }
                          },
                          "max_lines": {
                            "numberVal": {
                              "value": 1
                            }
                          },
                          "overflow": {
                            "stringVal": {
                              "value": "ellipsis"
                            }
                          }
                        },
                        "editorId": "782c4261-01a6-4891-b2d1-33249404f8c1"
                      },
                      {
                        "type": "text",
                        "properties": {
                          "content": {
                            "slot": {
                              "name": "id"
                            }
                          },
                          "style": {
                            "textStyle": {
                              "styleName": "label_small"
                            }
                          },
                          "color": {
                            "color": {
                              "color": "secondary_text"
                            }
                          }
                        },
                        "editorId": "d3a99fde-fd38-4fe6-b040-ab324f117725"
                      }
                    ],
                    "editorId": "fa47bd3d-a7a0-4d05-971f-e5259bf121af"
                  }
                ],
                "editorId": "c6916fc7-e32d-4fa2-9e04-1d0ce7aef706"
              },
              {
                "type": "expanded",
                "properties": {
                  "flex": {
                    "numberVal": {
                      "value": 2
                    }
                  }
                },
                "children": [
                  {
                    "type": "text",
                    "properties": {
                      "content": {
                        "slot": {
                          "name": "project"
                        }
                      },
                      "style": {
                        "textStyle": {
                          "styleName": "body_medium"
                        }
                      },
                      "color": {
                        "color": {
                          "color": "secondary_text"
                        }
                      },
                      "max_lines": {
                        "numberVal": {
                          "value": 1
                        }
                      },
                      "overflow": {
                        "stringVal": {
                          "value": "ellipsis"
                        }
                      }
                    },
                    "editorId": "b99f7264-001f-43ad-a2bf-05b93e410854"
                  }
                ],
                "editorId": "2d2d4d50-c0bc-46dc-9ca8-bca435272a07"
              },
              {
                "type": "expanded",
                "properties": {
                  "flex": {
                    "numberVal": {
                      "value": 1
                    }
                  }
                },
                "children": [
                  {
                    "type": "text",
                    "properties": {
                      "content": {
                        "slot": {
                          "name": "date"
                        }
                      },
                      "style": {
                        "textStyle": {
                          "styleName": "body_medium"
                        }
                      },
                      "color": {
                        "color": {
                          "color": "secondary_text"
                        }
                      }
                    },
                    "editorId": "e564e679-971c-49d2-90e3-dc68da999965"
                  }
                ],
                "editorId": "9c206bcc-f7f4-4ea6-bad0-e2f039459986"
              },
              {
                "type": "expanded",
                "properties": {
                  "flex": {
                    "numberVal": {
                      "value": 1
                    }
                  }
                },
                "children": [
                  {
                    "type": "text",
                    "properties": {
                      "content": {
                        "slot": {
                          "name": "amount"
                        }
                      },
                      "style": {
                        "textStyle": {
                          "styleName": "body_medium"
                        }
                      },
                      "color": {
                        "color": {
                          "color": "primary_text"
                        }
                      },
                      "font_weight": {
                        "numberVal": {
                          "value": 500
                        }
                      }
                    },
                    "editorId": "acbb8bed-87b0-493f-bad4-d2d74f2d8406"
                  }
                ],
                "editorId": "89bbc713-dc41-43e2-8f43-b47d86762b06"
              },
              {
                "type": "container",
                "properties": {
                  "width": {
                    "px": {
                      "value": 100,
                      "isInfinity": false
                    }
                  },
                  "align_child": {
                    "align": {
                      "named": "center_left"
                    }
                  }
                },
                "children": [
                  {
                    "type": "@status_chip",
                    "properties": {
                      "label": {
                        "slot": {
                          "name": "status"
                        }
                      },
                      "bg": {
                        "slot": {
                          "name": "status_bg"
                        }
                      },
                      "color": {
                        "slot": {
                          "name": "status_color"
                        }
                      }
                    },
                    "editorId": "0c64184b-80db-41f4-b8ab-eae638c72239"
                  }
                ],
                "editorId": "c68afa76-2179-4e5b-8b2a-debf9a6280a8"
              },
              {
                "type": "iconbutton",
                "properties": {
                  "name": {
                    "icon": {
                      "name": "more_vert_rounded"
                    }
                  },
                  "color": {
                    "color": {
                      "color": "secondary_text"
                    }
                  },
                  "size": {
                    "numberVal": {
                      "value": 20
                    }
                  }
                },
                "editorId": "e3f4f0b2-b111-4955-a494-acbcb68f9b23"
              }
            ],
            "editorId": "fed2289d-2c56-4092-ac01-cfbc68707eea"
          }
        ],
        "editorId": "454d8860-4030-4f72-b1a1-eb290aba86ed"
      }
    }
  ]
}
```

### 3. Technical Knowledge Chat

- Frame ID: `309556f8-a4de-4053-b013-43aae0c06a9f`
- Original page prompt: "An AI-native chat interface for querying company documentation, featuring a blurred gradient background and glassmorphic message bubbles."
- Follow-up prompts: _None_

#### DslDocument (JSON)

```json
{
  "root": {
    "type": "scaffold",
    "properties": {
      "bg": {
        "color": {
          "color": "#F2F4F7"
        }
      },
      "safe_area": {
        "boolVal": {
          "value": true
        }
      }
    },
    "children": [
      {
        "type": "stack",
        "children": [
          {
            "type": "container",
            "properties": {
              "width": {
                "px": {
                  "value": "Infinity",
                  "isInfinity": true
                }
              },
              "height": {
                "px": {
                  "value": "Infinity",
                  "isInfinity": true
                }
              }
            },
            "children": [
              {
                "type": "stack",
                "children": [
                  {
                    "type": "container",
                    "properties": {
                      "align": {
                        "align": {
                          "positional": {
                            "x": -0.8,
                            "y": -0.5
                          }
                        }
                      },
                      "width": {
                        "px": {
                          "value": 600,
                          "isInfinity": false
                        }
                      },
                      "height": {
                        "px": {
                          "value": 600,
                          "isInfinity": false
                        }
                      },
                      "gradient": {
                        "gradient": {
                          "type": "GRADIENT_TYPE_RADIAL",
                          "direction": "center",
                          "stops": [
                            {
                              "color": "#DDE4ED"
                            },
                            {
                              "color": "transparent"
                            }
                          ]
                        }
                      },
                      "opacity": {
                        "numberVal": {
                          "value": 0.6
                        }
                      }
                    },
                    "editorId": "77af1224-aced-4863-b46a-8b480530846a"
                  },
                  {
                    "type": "container",
                    "properties": {
                      "align": {
                        "align": {
                          "positional": {
                            "x": 0.9,
                            "y": 0.8
                          }
                        }
                      },
                      "width": {
                        "px": {
                          "value": 500,
                          "isInfinity": false
                        }
                      },
                      "height": {
                        "px": {
                          "value": 500,
                          "isInfinity": false
                        }
                      },
                      "gradient": {
                        "gradient": {
                          "type": "GRADIENT_TYPE_RADIAL",
                          "direction": "center",
                          "stops": [
                            {
                              "color": "#E5DCD3"
                            },
                            {
                              "color": "transparent"
                            }
                          ]
                        }
                      },
                      "opacity": {
                        "numberVal": {
                          "value": 0.5
                        }
                      }
                    },
                    "editorId": "8c590eb3-3261-4568-a8bb-d535b19f6c47"
                  }
                ],
                "editorId": "3643db59-b18f-429d-9924-3e70550ad780"
              }
            ],
            "editorId": "be331c54-60cf-4a3a-8eb6-4f6aca9901fe"
          },
          {
            "type": "row",
            "properties": {
              "cross_align": {
                "align": {
                  "named": "stretch"
                }
              }
            },
            "children": [
              {
                "type": "container",
                "properties": {
                  "width": {
                    "px": {
                      "value": 260,
                      "isInfinity": false
                    }
                  },
                  "bg": {
                    "color": {
                      "color": "#FFFFFF40"
                    }
                  },
                  "backdrop_blur": {
                    "numberVal": {
                      "value": 20
                    }
                  },
                  "border": {
                    "borderSided": {
                      "side": "right",
                      "width": 1,
                      "color": "#00000008"
                    }
                  },
                  "padding": {
                    "edgeInsets": {
                      "top": 0,
                      "right": 0,
                      "bottom": 0,
                      "left": 0,
                      "topToken": "lg",
                      "rightToken": "md",
                      "bottomToken": "lg",
                      "leftToken": "md"
                    }
                  }
                },
                "children": [
                  {
                    "type": "column",
                    "properties": {
                      "cross_align": {
                        "align": {
                          "named": "stretch"
                        }
                      }
                    },
                    "children": [
                      {
                        "type": "row",
                        "properties": {
                          "spacing": {
                            "stringVal": {
                              "value": "sm"
                            }
                          },
                          "padding": {
                            "edgeInsets": {
                              "top": 0,
                              "right": 0,
                              "bottom": 0,
                              "left": 0,
                              "bottomToken": "xl"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "container",
                            "properties": {
                              "width": {
                                "px": {
                                  "value": 32,
                                  "isInfinity": false
                                }
                              },
                              "height": {
                                "px": {
                                  "value": 32,
                                  "isInfinity": false
                                }
                              },
                              "bg": {
                                "color": {
                                  "color": "primary_text"
                                }
                              },
                              "radius": {
                                "radius": {
                                  "topLeft": 0,
                                  "topRight": 0,
                                  "bottomLeft": 0,
                                  "bottomRight": 0,
                                  "token": "md"
                                }
                              },
                              "align_child": {
                                "align": {
                                  "named": "center"
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "icon",
                                "properties": {
                                  "name": {
                                    "icon": {
                                      "name": "memory_rounded"
                                    }
                                  },
                                  "color": {
                                    "color": {
                                      "color": "background"
                                    }
                                  },
                                  "size": {
                                    "numberVal": {
                                      "value": 20
                                    }
                                  }
                                },
                                "editorId": "49789056-83c8-4b03-b525-e1ffab8bd85b"
                              }
                            ],
                            "editorId": "4ebfad44-0952-4fef-a82d-11a08456902b"
                          },
                          {
                            "type": "text",
                            "properties": {
                              "content": {
                                "stringVal": {
                                  "value": "FORGE"
                                }
                              },
                              "style": {
                                "textStyle": {
                                  "styleName": "title_medium"
                                }
                              },
                              "font_weight": {
                                "numberVal": {
                                  "value": 800
                                }
                              },
                              "color": {
                                "color": {
                                  "color": "primary_text"
                                }
                              }
                            },
                            "editorId": "02bb69dd-b44a-44ea-a414-de8299072105"
                          }
                        ],
                        "editorId": "8b0ff6fb-7e19-4137-8e2b-94a254f1342c"
                      },
                      {
                        "type": "column",
                        "properties": {
                          "spacing": {
                            "stringVal": {
                              "value": "xs"
                            }
                          },
                          "cross_align": {
                            "align": {
                              "named": "stretch"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "@sidebar_item",
                            "properties": {
                              "icon": {
                                "stringVal": {
                                  "value": "space_dashboard_rounded"
                                }
                              },
                              "label": {
                                "stringVal": {
                                  "value": "Insights"
                                }
                              },
                              "active": {
                                "boolVal": {
                                  "value": false
                                }
                              }
                            },
                            "editorId": "8455882d-25c8-45c1-b245-7990903151bd"
                          },
                          {
                            "type": "@sidebar_item",
                            "properties": {
                              "icon": {
                                "stringVal": {
                                  "value": "request_quote_rounded"
                                }
                              },
                              "label": {
                                "stringVal": {
                                  "value": "Quoting Tool"
                                }
                              },
                              "active": {
                                "boolVal": {
                                  "value": false
                                }
                              }
                            },
                            "editorId": "988cd6b1-2561-41ef-9319-417b182eefbd"
                          },
                          {
                            "type": "@sidebar_item",
                            "properties": {
                              "icon": {
                                "stringVal": {
                                  "value": "auto_awesome_rounded"
                                }
                              },
                              "label": {
                                "stringVal": {
                                  "value": "Knowledge Base"
                                }
                              },
                              "active": {
                                "boolVal": {
                                  "value": true
                                }
                              }
                            },
                            "editorId": "f9df2026-da36-4120-8a3d-1409fe6d00b5"
                          },
                          {
                            "type": "@sidebar_item",
                            "properties": {
                              "icon": {
                                "stringVal": {
                                  "value": "support_agent_rounded"
                                }
                              },
                              "label": {
                                "stringVal": {
                                  "value": "Agents Pane"
                                }
                              },
                              "active": {
                                "boolVal": {
                                  "value": false
                                }
                              }
                            },
                            "editorId": "f0ce58cf-184d-457a-b8c3-1a937c7a1eba"
                          }
                        ],
                        "editorId": "c1124a16-7ffc-478d-88e4-912bcbe522ba"
                      },
                      {
                        "type": "spacer",
                        "editorId": "5ee27ec8-0013-45ff-9ccd-515dab004a58"
                      },
                      {
                        "type": "text",
                        "properties": {
                          "content": {
                            "stringVal": {
                              "value": "RECENT QUERIES"
                            }
                          },
                          "style": {
                            "textStyle": {
                              "styleName": "label_small"
                            }
                          },
                          "color": {
                            "color": {
                              "color": "hint"
                            }
                          },
                          "margin": {
                            "edgeInsets": {
                              "top": 0,
                              "right": 0,
                              "bottom": 0,
                              "left": 0,
                              "bottomToken": "sm",
                              "leftToken": "lg"
                            }
                          }
                        },
                        "editorId": "6e0f60d9-7d03-484e-a62c-46420c8fee38"
                      },
                      {
                        "type": "column",
                        "properties": {
                          "spacing": {
                            "stringVal": {
                              "value": "xs"
                            }
                          },
                          "cross_align": {
                            "align": {
                              "named": "stretch"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "@sidebar_item",
                            "properties": {
                              "icon": {
                                "stringVal": {
                                  "value": "history_rounded"
                                }
                              },
                              "label": {
                                "stringVal": {
                                  "value": "Alloy Stress Limits"
                                }
                              },
                              "active": {
                                "boolVal": {
                                  "value": false
                                }
                              }
                            },
                            "editorId": "3d6be894-2baf-4e23-b379-33d9b903cafb"
                          },
                          {
                            "type": "@sidebar_item",
                            "properties": {
                              "icon": {
                                "stringVal": {
                                  "value": "history_rounded"
                                }
                              },
                              "label": {
                                "stringVal": {
                                  "value": "ISO 9001 Compliance"
                                }
                              },
                              "active": {
                                "boolVal": {
                                  "value": false
                                }
                              }
                            },
                            "editorId": "5e12a3f6-65e5-4751-bce7-05224c72eb51"
                          }
                        ],
                        "editorId": "2648f538-7147-4801-adb1-7b69f8a5cf7c"
                      },
                      {
                        "type": "sizedbox",
                        "properties": {
                          "height": {
                            "stringVal": {
                              "value": "lg"
                            }
                          }
                        },
                        "editorId": "a906246c-1d73-4644-9378-a23cc292eb15"
                      },
                      {
                        "type": "container",
                        "properties": {
                          "padding": {
                            "edgeInsets": {
                              "top": 0,
                              "right": 0,
                              "bottom": 0,
                              "left": 0,
                              "token": "md"
                            }
                          },
                          "radius": {
                            "radius": {
                              "topLeft": 0,
                              "topRight": 0,
                              "bottomLeft": 0,
                              "bottomRight": 0,
                              "token": "lg"
                            }
                          },
                          "bg": {
                            "color": {
                              "color": "#00000005"
                            }
                          },
                          "border": {
                            "border": {
                              "width": 1,
                              "color": "#00000008"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "row",
                            "properties": {
                              "spacing": {
                                "stringVal": {
                                  "value": "md"
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "avatar",
                                "properties": {
                                  "source_desc": {
                                    "imageSource": {
                                      "type": "IMAGE_SOURCE_TYPE_DESCRIPTION",
                                      "value": "professional man in minimalist studio"
                                    }
                                  },
                                  "size": {
                                    "numberVal": {
                                      "value": 32
                                    }
                                  }
                                },
                                "editorId": "88e7628f-07be-406a-be8c-f96baf7df6a5"
                              },
                              {
                                "type": "expanded",
                                "children": [
                                  {
                                    "type": "column",
                                    "properties": {
                                      "cross_align": {
                                        "align": {
                                          "named": "start"
                                        }
                                      }
                                    },
                                    "children": [
                                      {
                                        "type": "text",
                                        "properties": {
                                          "content": {
                                            "stringVal": {
                                              "value": "Alex Rivera"
                                            }
                                          },
                                          "style": {
                                            "textStyle": {
                                              "styleName": "label_large"
                                            }
                                          },
                                          "color": {
                                            "color": {
                                              "color": "primary_text"
                                            }
                                          },
                                          "max_lines": {
                                            "numberVal": {
                                              "value": 1
                                            }
                                          }
                                        },
                                        "editorId": "a558c935-6c0e-494c-8974-256041a1536b"
                                      },
                                      {
                                        "type": "text",
                                        "properties": {
                                          "content": {
                                            "stringVal": {
                                              "value": "System Admin"
                                            }
                                          },
                                          "style": {
                                            "textStyle": {
                                              "styleName": "label_small"
                                            }
                                          },
                                          "color": {
                                            "color": {
                                              "color": "secondary_text"
                                            }
                                          }
                                        },
                                        "editorId": "885af532-fe29-42e5-ba2e-aaa496c25270"
                                      }
                                    ],
                                    "editorId": "751c1e09-4a39-4230-bbad-d4c2e65642ee"
                                  }
                                ],
                                "editorId": "e2fde989-ca80-470e-a601-23618c86ccef"
                              }
                            ],
                            "editorId": "9c5cf86b-5da3-469b-9400-e74ca932cb58"
                          }
                        ],
                        "editorId": "caa130bb-1c45-4ce4-b019-a22949575b6c"
                      }
                    ],
                    "editorId": "4e2201b0-2f16-434f-bfaa-cb0a90fe5f35"
                  }
                ],
                "editorId": "fae04707-5edc-4e72-a73e-cbb8ccf81485"
              },
              {
                "type": "expanded",
                "children": [
                  {
                    "type": "column",
                    "properties": {
                      "cross_align": {
                        "align": {
                          "named": "stretch"
                        }
                      }
                    },
                    "children": [
                      {
                        "type": "container",
                        "properties": {
                          "height": {
                            "px": {
                              "value": 80,
                              "isInfinity": false
                            }
                          },
                          "padding": {
                            "edgeInsets": {
                              "top": 0,
                              "right": 0,
                              "bottom": 0,
                              "left": 0,
                              "rightToken": "xl",
                              "leftToken": "xl"
                            }
                          },
                          "border": {
                            "borderSided": {
                              "side": "bottom",
                              "width": 1,
                              "color": "#00000005"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "row",
                            "properties": {
                              "align": {
                                "align": {
                                  "named": "space_between"
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "column",
                                "properties": {
                                  "cross_align": {
                                    "align": {
                                      "named": "start"
                                    }
                                  },
                                  "main_size": {
                                    "stringVal": {
                                      "value": "min"
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "properties": {
                                      "content": {
                                        "stringVal": {
                                          "value": "Technical Knowledge Base"
                                        }
                                      },
                                      "style": {
                                        "textStyle": {
                                          "styleName": "title_large"
                                        }
                                      },
                                      "font_weight": {
                                        "numberVal": {
                                          "value": 600
                                        }
                                      },
                                      "color": {
                                        "color": {
                                          "color": "primary_text"
                                        }
                                      }
                                    },
                                    "editorId": "cb4915ba-f028-464a-93e5-aa9c3e841a58"
                                  },
                                  {
                                    "type": "text",
                                    "properties": {
                                      "content": {
                                        "stringVal": {
                                          "value": "AI-powered documentation retrieval"
                                        }
                                      },
                                      "style": {
                                        "textStyle": {
                                          "styleName": "body_small"
                                        }
                                      },
                                      "color": {
                                        "color": {
                                          "color": "secondary_text"
                                        }
                                      }
                                    },
                                    "editorId": "bef773ce-687f-41b5-84e1-6ec363def57d"
                                  }
                                ],
                                "editorId": "c8f20c89-8c24-4a1e-97db-384f97cd8832"
                              },
                              {
                                "type": "row",
                                "properties": {
                                  "spacing": {
                                    "stringVal": {
                                      "value": "md"
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "button",
                                    "properties": {
                                      "content": {
                                        "stringVal": {
                                          "value": "Upload Docs"
                                        }
                                      },
                                      "icon": {
                                        "icon": {
                                          "name": "add_rounded"
                                        }
                                      },
                                      "variant": {
                                        "stringVal": {
                                          "value": "outlined"
                                        }
                                      },
                                      "color": {
                                        "color": {
                                          "color": "primary_text"
                                        }
                                      },
                                      "radius": {
                                        "radius": {
                                          "topLeft": 0,
                                          "topRight": 0,
                                          "bottomLeft": 0,
                                          "bottomRight": 0,
                                          "token": "md"
                                        }
                                      }
                                    },
                                    "editorId": "a98d4cae-3410-4ac7-ac3f-690542633408"
                                  },
                                  {
                                    "type": "iconbutton",
                                    "properties": {
                                      "name": {
                                        "icon": {
                                          "name": "settings_rounded"
                                        }
                                      },
                                      "color": {
                                        "color": {
                                          "color": "secondary_text"
                                        }
                                      }
                                    },
                                    "editorId": "05980b51-1fab-4a83-ad5e-c1603a996c08"
                                  }
                                ],
                                "editorId": "e4c02c32-4c68-49e2-9f4e-25f1972be5f3"
                              }
                            ],
                            "editorId": "b9e438b2-831a-4bb4-b829-9c6e84f3ee74"
                          }
                        ],
                        "editorId": "b532782c-0c28-48f9-a661-1b34feccb757"
                      },
                      {
                        "type": "expanded",
                        "children": [
                          {
                            "type": "column",
                            "properties": {
                              "scroll": {
                                "boolVal": {
                                  "value": true
                                }
                              },
                              "padding": {
                                "edgeInsets": {
                                  "top": 0,
                                  "right": 0,
                                  "bottom": 0,
                                  "left": 0,
                                  "token": "xl"
                                }
                              },
                              "spacing": {
                                "stringVal": {
                                  "value": "lg"
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "center",
                                "children": [
                                  {
                                    "type": "column",
                                    "properties": {
                                      "spacing": {
                                        "stringVal": {
                                          "value": "xl"
                                        }
                                      },
                                      "max_width": {
                                        "px": {
                                          "value": 800,
                                          "isInfinity": false
                                        }
                                      }
                                    },
                                    "children": [
                                      {
                                        "type": "container",
                                        "properties": {
                                          "margin": {
                                            "edgeInsets": {
                                              "top": 0,
                                              "right": 0,
                                              "bottom": 0,
                                              "left": 0,
                                              "bottomToken": "xl"
                                            }
                                          }
                                        },
                                        "children": [
                                          {
                                            "type": "column",
                                            "properties": {
                                              "spacing": {
                                                "stringVal": {
                                                  "value": "md"
                                                }
                                              }
                                            },
                                            "children": [
                                              {
                                                "type": "text",
                                                "properties": {
                                                  "content": {
                                                    "stringVal": {
                                                      "value": "How can I help you today?"
                                                    }
                                                  },
                                                  "style": {
                                                    "textStyle": {
                                                      "styleName": "headline_medium"
                                                    }
                                                  },
                                                  "color": {
                                                    "color": {
                                                      "color": "primary_text"
                                                    }
                                                  },
                                                  "font_weight": {
                                                    "numberVal": {
                                                      "value": 500
                                                    }
                                                  }
                                                },
                                                "editorId": "9f9c3651-a65a-4154-9fb7-5c9bd044e499"
                                              },
                                              {
                                                "type": "text",
                                                "properties": {
                                                  "content": {
                                                    "stringVal": {
                                                      "value": "Search across 1,240 technical manuals, safety protocols, and maintenance logs."
                                                    }
                                                  },
                                                  "style": {
                                                    "textStyle": {
                                                      "styleName": "body_large"
                                                    }
                                                  },
                                                  "color": {
                                                    "color": {
                                                      "color": "secondary_text"
                                                    }
                                                  },
                                                  "text_align": {
                                                    "align": {
                                                      "named": "center"
                                                    }
                                                  }
                                                },
                                                "editorId": "c3c822a8-f68e-42cd-bef6-ca676fe7b262"
                                              }
                                            ],
                                            "editorId": "6facd980-2a82-4a02-a29c-af75ae64e21a"
                                          }
                                        ],
                                        "editorId": "44227f2a-bc9a-461d-a273-41a0106d3792"
                                      },
                                      {
                                        "type": "row",
                                        "properties": {
                                          "spacing": {
                                            "stringVal": {
                                              "value": "md"
                                            }
                                          }
                                        },
                                        "children": [
                                          {
                                            "type": "@doc_card",
                                            "properties": {
                                              "icon": {
                                                "stringVal": {
                                                  "value": "description_rounded"
                                                }
                                              },
                                              "title": {
                                                "stringVal": {
                                                  "value": "Safety Protocols"
                                                }
                                              },
                                              "size": {
                                                "stringVal": {
                                                  "value": "2.4 MB"
                                                }
                                              }
                                            },
                                            "editorId": "786dd934-4257-42bc-bb31-60cef7f62878"
                                          },
                                          {
                                            "type": "@doc_card",
                                            "properties": {
                                              "icon": {
                                                "stringVal": {
                                                  "value": "table_chart_rounded"
                                                }
                                              },
                                              "title": {
                                                "stringVal": {
                                                  "value": "Material Specs"
                                                }
                                              },
                                              "size": {
                                                "stringVal": {
                                                  "value": "14.8 MB"
                                                }
                                              }
                                            },
                                            "editorId": "9f664768-906a-4fe0-af56-040f54f829c1"
                                          },
                                          {
                                            "type": "@doc_card",
                                            "properties": {
                                              "icon": {
                                                "stringVal": {
                                                  "value": "inventory_2_rounded"
                                                }
                                              },
                                              "title": {
                                                "stringVal": {
                                                  "value": "Legacy Archive"
                                                }
                                              },
                                              "size": {
                                                "stringVal": {
                                                  "value": "112 MB"
                                                }
                                              }
                                            },
                                            "editorId": "20ff12ab-df6a-4b80-a47a-be3486b6e0d8"
                                          }
                                        ],
                                        "editorId": "c14b07ab-3037-460d-95d8-22474f0b5470"
                                      }
                                    ],
                                    "editorId": "bfa75dc3-da73-43e8-9419-81a5ba8479d6"
                                  }
                                ],
                                "editorId": "ac60bedd-c06a-4da9-8a50-e4523b824c74"
                              },
                              {
                                "type": "@chat_bubble",
                                "properties": {
                                  "is_ai": {
                                    "boolVal": {
                                      "value": false
                                    }
                                  },
                                  "message": {
                                    "stringVal": {
                                      "value": "What are the specific heat treatment requirements for A36 structural steel according to our internal standards?"
                                    }
                                  },
                                  "has_sources": {
                                    "boolVal": {
                                      "value": false
                                    }
                                  }
                                },
                                "editorId": "2cbf17cb-85bb-4881-8182-b919e17df7a9"
                              },
                              {
                                "type": "@chat_bubble",
                                "properties": {
                                  "is_ai": {
                                    "boolVal": {
                                      "value": true
                                    }
                                  },
                                  "message": {
                                    "stringVal": {
                                      "value": "Based on the Internal Metallurgy Handbook (v4.2), A36 structural steel typically does not require heat treatment for standard applications. However, for stress-relieving in heavy weldments, the following protocol is specified:\n\n1. Heating Rate: Do not exceed 400°F per hour.\n2. Soak Temperature: 1100°F - 1250°F.\n3. Soak Time: 1 hour per inch of thickness.\n4. Cooling: Furnace cool to 600°F before air cooling."
                                    }
                                  },
                                  "has_sources": {
                                    "boolVal": {
                                      "value": true
                                    }
                                  }
                                },
                                "editorId": "81552734-f16e-4918-887e-3bdb75132ec0"
                              }
                            ],
                            "editorId": "2a274d28-e250-4ae2-82f0-ca802f186ca9"
                          }
                        ],
                        "editorId": "bd200c82-edcd-4388-a94c-4e042f1bdf18"
                      },
                      {
                        "type": "container",
                        "properties": {
                          "padding": {
                            "edgeInsets": {
                              "top": 0,
                              "right": 0,
                              "bottom": 0,
                              "left": 0,
                              "token": "xl"
                            }
                          },
                          "gradient": {
                            "gradient": {
                              "type": "GRADIENT_TYPE_LINEAR",
                              "direction": "to_top",
                              "stops": [
                                {
                                  "color": "#F2F4F7",
                                  "position": 0
                                },
                                {
                                  "color": "transparent",
                                  "position": 100
                                }
                              ]
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "container",
                            "properties": {
                              "bg": {
                                "color": {
                                  "color": "#FFFFFF90"
                                }
                              },
                              "backdrop_blur": {
                                "numberVal": {
                                  "value": 20
                                }
                              },
                              "radius": {
                                "radius": {
                                  "topLeft": 0,
                                  "topRight": 0,
                                  "bottomLeft": 0,
                                  "bottomRight": 0,
                                  "token": "xl"
                                }
                              },
                              "padding": {
                                "edgeInsets": {
                                  "top": 0,
                                  "right": 0,
                                  "bottom": 0,
                                  "left": 0,
                                  "topToken": "md",
                                  "rightToken": "lg",
                                  "bottomToken": "md",
                                  "leftToken": "lg"
                                }
                              },
                              "border": {
                                "border": {
                                  "width": 1,
                                  "color": "#FFFFFF"
                                }
                              },
                              "shadow": {
                                "shadow": {
                                  "color": "#00000008",
                                  "dx": 0,
                                  "dy": 10,
                                  "blur": 30,
                                  "spread": 0
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "row",
                                "properties": {
                                  "spacing": {
                                    "stringVal": {
                                      "value": "md"
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "iconbutton",
                                    "properties": {
                                      "name": {
                                        "icon": {
                                          "name": "attach_file_rounded"
                                        }
                                      },
                                      "color": {
                                        "color": {
                                          "color": "secondary_text"
                                        }
                                      }
                                    },
                                    "editorId": "b52097e2-27a5-4b30-b318-61c3a63ed725"
                                  },
                                  {
                                    "type": "expanded",
                                    "children": [
                                      {
                                        "type": "textfield",
                                        "properties": {
                                          "hint": {
                                            "stringVal": {
                                              "value": "Ask a technical question..."
                                            }
                                          },
                                          "border_width": {
                                            "numberVal": {
                                              "value": 0
                                            }
                                          },
                                          "filled": {
                                            "boolVal": {
                                              "value": false
                                            }
                                          }
                                        },
                                        "editorId": "84b0fa3b-8e01-4c4c-b318-7dc2c411a9ce"
                                      }
                                    ],
                                    "editorId": "124f2a18-e879-466d-958a-d12951990e3f"
                                  },
                                  {
                                    "type": "container",
                                    "properties": {
                                      "width": {
                                        "px": {
                                          "value": 44,
                                          "isInfinity": false
                                        }
                                      },
                                      "height": {
                                        "px": {
                                          "value": 44,
                                          "isInfinity": false
                                        }
                                      },
                                      "bg": {
                                        "color": {
                                          "color": "primary_text"
                                        }
                                      },
                                      "radius": {
                                        "radius": {
                                          "topLeft": 0,
                                          "topRight": 0,
                                          "bottomLeft": 0,
                                          "bottomRight": 0,
                                          "token": "full"
                                        }
                                      },
                                      "align_child": {
                                        "align": {
                                          "named": "center"
                                        }
                                      }
                                    },
                                    "children": [
                                      {
                                        "type": "icon",
                                        "properties": {
                                          "name": {
                                            "icon": {
                                              "name": "arrow_upward_rounded"
                                            }
                                          },
                                          "color": {
                                            "color": {
                                              "color": "background"
                                            }
                                          },
                                          "size": {
                                            "numberVal": {
                                              "value": 20
                                            }
                                          }
                                        },
                                        "editorId": "c262c493-5d61-4125-9c91-3e9b936dde4a"
                                      }
                                    ],
                                    "editorId": "3d7abcbd-6b9a-49b6-ab0c-6db8885704d9"
                                  }
                                ],
                                "editorId": "9126cbc8-84ba-4d10-8f92-a62283df6fff"
                              }
                            ],
                            "editorId": "e3e312fa-dfa3-4d56-95eb-3f36c7e1f45f"
                          }
                        ],
                        "editorId": "8e4fb833-0ddf-4cb1-b3d8-bc20d4506ac9"
                      }
                    ],
                    "editorId": "fe671d95-9f2e-4419-8750-d45b77e3f448"
                  }
                ],
                "editorId": "647c5ef0-0f02-4940-8693-de32e0c3da25"
              }
            ],
            "editorId": "7c563c55-03a0-4011-aa65-0867ed67b2a2"
          },
          {
            "type": "container",
            "properties": {
              "align": {
                "align": {
                  "named": "top_right"
                }
              },
              "margin": {
                "edgeInsets": {
                  "top": 0,
                  "right": 0,
                  "bottom": 0,
                  "left": 0,
                  "topToken": "lg",
                  "rightToken": "xl",
                  "bottomToken": "lg",
                  "leftToken": "xl"
                }
              }
            },
            "editorId": "da22f27f-490e-4242-85e3-81285b572ce7"
          }
        ],
        "editorId": "ec430852-4f1b-4e78-8345-a4e8e263c850"
      }
    ],
    "editorId": "1c78c3f6-c272-4d30-9d79-269e38fcb07a"
  },
  "components": [
    {
      "name": "sidebar_item",
      "root": {
        "type": "container",
        "properties": {
          "padding": {
            "edgeInsets": {
              "top": 0,
              "right": 0,
              "bottom": 0,
              "left": 0,
              "topToken": "md",
              "rightToken": "lg",
              "bottomToken": "md",
              "leftToken": "lg"
            }
          },
          "radius": {
            "radius": {
              "topLeft": 0,
              "topRight": 0,
              "bottomLeft": 0,
              "bottomRight": 0,
              "token": "md"
            }
          },
          "bg": {
            "conditional": {
              "conditionSlot": "active",
              "trueValue": {
                "color": {
                  "color": "#00000008"
                }
              },
              "falseValue": {
                "color": {
                  "color": "transparent"
                }
              }
            }
          }
        },
        "children": [
          {
            "type": "row",
            "properties": {
              "spacing": {
                "stringVal": {
                  "value": "md"
                }
              }
            },
            "children": [
              {
                "type": "icon",
                "properties": {
                  "name": {
                    "slot": {
                      "name": "icon"
                    }
                  },
                  "size": {
                    "numberVal": {
                      "value": 20
                    }
                  },
                  "color": {
                    "conditional": {
                      "conditionSlot": "active",
                      "trueValue": {
                        "color": {
                          "color": "primary_text"
                        }
                      },
                      "falseValue": {
                        "color": {
                          "color": "secondary_text"
                        }
                      }
                    }
                  }
                },
                "editorId": "aebc576c-f66d-4c5e-8ba9-d9de49192cf6"
              },
              {
                "type": "text",
                "properties": {
                  "content": {
                    "slot": {
                      "name": "label"
                    }
                  },
                  "style": {
                    "textStyle": {
                      "styleName": "body_medium"
                    }
                  },
                  "color": {
                    "conditional": {
                      "conditionSlot": "active",
                      "trueValue": {
                        "color": {
                          "color": "primary_text"
                        }
                      },
                      "falseValue": {
                        "color": {
                          "color": "secondary_text"
                        }
                      }
                    }
                  },
                  "font_weight": {
                    "conditional": {
                      "conditionSlot": "active",
                      "trueValue": {
                        "numberVal": {
                          "value": 600
                        }
                      },
                      "falseValue": {
                        "numberVal": {
                          "value": 400
                        }
                      }
                    }
                  }
                },
                "editorId": "ae50aa3f-ba04-4639-9b33-68a345b99e27"
              }
            ],
            "editorId": "7baf5bd7-103d-485f-b99f-4f2fed221511"
          }
        ],
        "editorId": "e749a67e-d2e8-4133-a7ce-5bc44eda496f"
      }
    },
    {
      "name": "chat_bubble",
      "root": {
        "type": "container",
        "properties": {
          "margin": {
            "edgeInsets": {
              "top": 0,
              "right": 0,
              "bottom": 0,
              "left": 0,
              "bottomToken": "lg"
            }
          },
          "align": {
            "conditional": {
              "conditionSlot": "is_ai",
              "trueValue": {
                "stringVal": {
                  "value": "left"
                }
              },
              "falseValue": {
                "stringVal": {
                  "value": "right"
                }
              }
            }
          }
        },
        "children": [
          {
            "type": "column",
            "properties": {
              "cross_align": {
                "conditional": {
                  "conditionSlot": "is_ai",
                  "trueValue": {
                    "stringVal": {
                      "value": "start"
                    }
                  },
                  "falseValue": {
                    "stringVal": {
                      "value": "end"
                    }
                  }
                }
              },
              "spacing": {
                "stringVal": {
                  "value": "sm"
                }
              }
            },
            "children": [
              {
                "type": "row",
                "properties": {
                  "spacing": {
                    "stringVal": {
                      "value": "sm"
                    }
                  },
                  "main_size": {
                    "stringVal": {
                      "value": "min"
                    }
                  }
                },
                "children": [
                  {
                    "type": "container",
                    "properties": {
                      "visible": {
                        "slot": {
                          "name": "is_ai"
                        }
                      }
                    },
                    "children": [
                      {
                        "type": "avatar",
                        "properties": {
                          "text": {
                            "stringVal": {
                              "value": "FI"
                            }
                          },
                          "size": {
                            "numberVal": {
                              "value": 24
                            }
                          },
                          "bg": {
                            "color": {
                              "color": "primary_text"
                            }
                          },
                          "color": {
                            "color": {
                              "color": "background"
                            }
                          }
                        },
                        "editorId": "a6f96050-5713-4a23-a74f-16447be40108"
                      }
                    ],
                    "editorId": "f7ba825b-c738-47c3-9c66-1271030fb331"
                  },
                  {
                    "type": "text",
                    "properties": {
                      "content": {
                        "conditional": {
                          "conditionSlot": "is_ai",
                          "trueValue": {
                            "stringVal": {
                              "value": "Forge Intelligence"
                            }
                          },
                          "falseValue": {
                            "stringVal": {
                              "value": "Technical Lead"
                            }
                          }
                        }
                      },
                      "style": {
                        "textStyle": {
                          "styleName": "label_small"
                        }
                      },
                      "color": {
                        "color": {
                          "color": "secondary_text"
                        }
                      }
                    },
                    "editorId": "56082533-d350-42c6-b1cd-3f305b3d3ba2"
                  }
                ],
                "editorId": "8e950cf4-9787-4746-9700-3a0a0d88675e"
              },
              {
                "type": "container",
                "properties": {
                  "max_width": {
                    "px": {
                      "value": 600,
                      "isInfinity": false
                    }
                  },
                  "padding": {
                    "edgeInsets": {
                      "top": 0,
                      "right": 0,
                      "bottom": 0,
                      "left": 0,
                      "token": "lg"
                    }
                  },
                  "radius": {
                    "radius": {
                      "topLeft": 0,
                      "topRight": 0,
                      "bottomLeft": 0,
                      "bottomRight": 0,
                      "token": "lg"
                    }
                  },
                  "bg": {
                    "conditional": {
                      "conditionSlot": "is_ai",
                      "trueValue": {
                        "color": {
                          "color": "#FFFFFF80"
                        }
                      },
                      "falseValue": {
                        "color": {
                          "color": "primary_text"
                        }
                      }
                    }
                  },
                  "backdrop_blur": {
                    "numberVal": {
                      "value": 12
                    }
                  },
                  "border": {
                    "borderConditional": {
                      "width": 1,
                      "colorConditional": {
                        "conditionSlot": "is_ai",
                        "trueValue": {
                          "color": {
                            "color": "#FFFFFF40"
                          }
                        },
                        "falseValue": {
                          "stringVal": {
                            "value": "primary_text"
                          }
                        }
                      }
                    }
                  }
                },
                "children": [
                  {
                    "type": "column",
                    "properties": {
                      "cross_align": {
                        "align": {
                          "named": "start"
                        }
                      },
                      "spacing": {
                        "stringVal": {
                          "value": "md"
                        }
                      }
                    },
                    "children": [
                      {
                        "type": "text",
                        "properties": {
                          "content": {
                            "slot": {
                              "name": "message"
                            }
                          },
                          "color": {
                            "conditional": {
                              "conditionSlot": "is_ai",
                              "trueValue": {
                                "color": {
                                  "color": "primary_text"
                                }
                              },
                              "falseValue": {
                                "color": {
                                  "color": "background"
                                }
                              }
                            }
                          },
                          "style": {
                            "textStyle": {
                              "styleName": "body_medium"
                            }
                          },
                          "line_height": {
                            "numberVal": {
                              "value": 1.5
                            }
                          }
                        },
                        "editorId": "d27ac5ff-5cdd-40f1-8af8-c8ebd24d75e3"
                      },
                      {
                        "type": "container",
                        "properties": {
                          "visible": {
                            "slot": {
                              "name": "has_sources"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "column",
                            "properties": {
                              "cross_align": {
                                "align": {
                                  "named": "start"
                                }
                              },
                              "spacing": {
                                "stringVal": {
                                  "value": "xs"
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "divider",
                                "properties": {
                                  "color": {
                                    "color": {
                                      "color": "#00000010"
                                    }
                                  }
                                },
                                "editorId": "f99889ba-84e1-4dde-892e-1a6a71701750"
                              },
                              {
                                "type": "text",
                                "properties": {
                                  "content": {
                                    "stringVal": {
                                      "value": "Sources:"
                                    }
                                  },
                                  "style": {
                                    "textStyle": {
                                      "styleName": "label_small"
                                    }
                                  },
                                  "color": {
                                    "color": {
                                      "color": "secondary_text"
                                    }
                                  }
                                },
                                "editorId": "217e44c6-b05f-4fed-a97d-9509194b8757"
                              },
                              {
                                "type": "row",
                                "properties": {
                                  "spacing": {
                                    "stringVal": {
                                      "value": "xs"
                                    }
                                  },
                                  "scroll": {
                                    "boolVal": {
                                      "value": true
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "chip",
                                    "properties": {
                                      "content": {
                                        "stringVal": {
                                          "value": "ASTM-A36_Spec.pdf"
                                        }
                                      },
                                      "variant": {
                                        "stringVal": {
                                          "value": "action"
                                        }
                                      },
                                      "size": {
                                        "stringVal": {
                                          "value": "small"
                                        }
                                      },
                                      "bg": {
                                        "color": {
                                          "color": "#00000005"
                                        }
                                      },
                                      "color": {
                                        "color": {
                                          "color": "secondary_text"
                                        }
                                      }
                                    },
                                    "editorId": "90a0e11c-640e-421f-b7b5-8acec9c35700"
                                  },
                                  {
                                    "type": "chip",
                                    "properties": {
                                      "content": {
                                        "stringVal": {
                                          "value": "Maintenance_Log_v2.csv"
                                        }
                                      },
                                      "variant": {
                                        "stringVal": {
                                          "value": "action"
                                        }
                                      },
                                      "size": {
                                        "stringVal": {
                                          "value": "small"
                                        }
                                      },
                                      "bg": {
                                        "color": {
                                          "color": "#00000005"
                                        }
                                      },
                                      "color": {
                                        "color": {
                                          "color": "secondary_text"
                                        }
                                      }
                                    },
                                    "editorId": "27815dc9-5e11-44bf-acf9-cffed80868bb"
                                  }
                                ],
                                "editorId": "26c3d34b-60f0-46aa-a14f-c95445e7c698"
                              }
                            ],
                            "editorId": "7704ea5e-cc7f-4715-a74d-449930e98ac2"
                          }
                        ],
                        "editorId": "b5d97ab7-8ad1-4bf3-b49d-e7e10516a0f5"
                      }
                    ],
                    "editorId": "834c668b-5487-48a1-a38d-0bda95a0931b"
                  }
                ],
                "editorId": "8312c585-52b9-4fc6-b420-9e41deb34d4f"
              }
            ],
            "editorId": "f32d47e0-9774-42e7-8f27-183a50dc10f6"
          }
        ],
        "editorId": "ac14453f-b0cb-4883-aaf1-7b60296a20ff"
      }
    },
    {
      "name": "doc_card",
      "root": {
        "type": "container",
        "properties": {
          "width": {
            "px": {
              "value": 180,
              "isInfinity": false
            }
          },
          "padding": {
            "edgeInsets": {
              "top": 0,
              "right": 0,
              "bottom": 0,
              "left": 0,
              "token": "md"
            }
          },
          "radius": {
            "radius": {
              "topLeft": 0,
              "topRight": 0,
              "bottomLeft": 0,
              "bottomRight": 0,
              "token": "lg"
            }
          },
          "bg": {
            "color": {
              "color": "#FFFFFF40"
            }
          },
          "border": {
            "border": {
              "width": 1,
              "color": "#FFFFFF60"
            }
          },
          "backdrop_blur": {
            "numberVal": {
              "value": 8
            }
          }
        },
        "children": [
          {
            "type": "column",
            "properties": {
              "cross_align": {
                "align": {
                  "named": "start"
                }
              },
              "spacing": {
                "stringVal": {
                  "value": "sm"
                }
              }
            },
            "children": [
              {
                "type": "icon",
                "properties": {
                  "name": {
                    "slot": {
                      "name": "icon"
                    }
                  },
                  "color": {
                    "color": {
                      "color": "primary_text"
                    }
                  },
                  "size": {
                    "numberVal": {
                      "value": 24
                    }
                  }
                },
                "editorId": "0f8b1662-f0c4-49b7-9438-204d865b20c0"
              },
              {
                "type": "text",
                "properties": {
                  "content": {
                    "slot": {
                      "name": "title"
                    }
                  },
                  "style": {
                    "textStyle": {
                      "styleName": "label_large"
                    }
                  },
                  "max_lines": {
                    "numberVal": {
                      "value": 1
                    }
                  },
                  "overflow": {
                    "stringVal": {
                      "value": "ellipsis"
                    }
                  },
                  "color": {
                    "color": {
                      "color": "primary_text"
                    }
                  }
                },
                "editorId": "25f16f3b-d624-4a95-92c7-7867143adb7d"
              },
              {
                "type": "text",
                "properties": {
                  "content": {
                    "slot": {
                      "name": "size"
                    }
                  },
                  "style": {
                    "textStyle": {
                      "styleName": "label_small"
                    }
                  },
                  "color": {
                    "color": {
                      "color": "secondary_text"
                    }
                  }
                },
                "editorId": "0fbff4fe-36e1-48bf-9392-8d0c4f6aa81f"
              }
            ],
            "editorId": "e8d607da-e744-4007-b661-ef9855a6a716"
          }
        ],
        "editorId": "c3ec7044-4058-469d-a7c7-46d966bd7616"
      }
    }
  ]
}
```

### 4. Agent Workspace

- Frame ID: `27663822-1960-4162-8afd-1a78da913730`
- Original page prompt: "A pane showcasing specialized AI agents with consistent card styles for task management and status monitoring."
- Follow-up prompts: _None_

#### DslDocument (JSON)

```json
{
  "root": {
    "type": "scaffold",
    "properties": {
      "bg": {
        "color": {
          "color": "#F8F9FA"
        }
      },
      "safe_area": {
        "boolVal": {
          "value": true
        }
      }
    },
    "children": [
      {
        "type": "stack",
        "children": [
          {
            "type": "container",
            "properties": {
              "width": {
                "px": {
                  "value": "Infinity",
                  "isInfinity": true
                }
              },
              "height": {
                "px": {
                  "value": "Infinity",
                  "isInfinity": true
                }
              }
            },
            "children": [
              {
                "type": "stack",
                "children": [
                  {
                    "type": "container",
                    "properties": {
                      "align": {
                        "align": {
                          "positional": {
                            "x": -0.8,
                            "y": -0.5
                          }
                        }
                      },
                      "width": {
                        "px": {
                          "value": 600,
                          "isInfinity": false
                        }
                      },
                      "height": {
                        "px": {
                          "value": 600,
                          "isInfinity": false
                        }
                      },
                      "gradient": {
                        "gradient": {
                          "type": "GRADIENT_TYPE_RADIAL",
                          "direction": "center",
                          "stops": [
                            {
                              "color": "#E2E8F0AA"
                            },
                            {
                              "color": "transparent"
                            }
                          ]
                        }
                      },
                      "blur": {
                        "numberVal": {
                          "value": 80
                        }
                      }
                    },
                    "editorId": "c617587e-d0ec-4125-ae88-634750417d8f"
                  },
                  {
                    "type": "container",
                    "properties": {
                      "align": {
                        "align": {
                          "positional": {
                            "x": 0.9,
                            "y": 0.7
                          }
                        }
                      },
                      "width": {
                        "px": {
                          "value": 500,
                          "isInfinity": false
                        }
                      },
                      "height": {
                        "px": {
                          "value": 500,
                          "isInfinity": false
                        }
                      },
                      "gradient": {
                        "gradient": {
                          "type": "GRADIENT_TYPE_RADIAL",
                          "direction": "center",
                          "stops": [
                            {
                              "color": "#CBD5E166"
                            },
                            {
                              "color": "transparent"
                            }
                          ]
                        }
                      },
                      "blur": {
                        "numberVal": {
                          "value": 100
                        }
                      }
                    },
                    "editorId": "6438be40-cb23-4f66-8a27-38b0c249ee7b"
                  }
                ],
                "editorId": "82be30a3-119b-4787-acc1-fb19fbef3af5"
              }
            ],
            "editorId": "c6863b4c-231f-4ce7-bdd6-757aedf6840b"
          },
          {
            "type": "row",
            "properties": {
              "cross_align": {
                "align": {
                  "named": "stretch"
                }
              }
            },
            "children": [
              {
                "type": "container",
                "properties": {
                  "width": {
                    "px": {
                      "value": 260,
                      "isInfinity": false
                    }
                  },
                  "bg": {
                    "color": {
                      "color": "#FFFFFF88"
                    }
                  },
                  "backdrop_blur": {
                    "numberVal": {
                      "value": 20
                    }
                  },
                  "border": {
                    "borderSided": {
                      "side": "right",
                      "width": 1,
                      "color": "#00000008"
                    }
                  },
                  "padding": {
                    "edgeInsets": {
                      "top": 0,
                      "right": 0,
                      "bottom": 0,
                      "left": 0,
                      "token": "lg"
                    }
                  }
                },
                "children": [
                  {
                    "type": "column",
                    "properties": {
                      "spacing": {
                        "stringVal": {
                          "value": "xs"
                        }
                      },
                      "cross_align": {
                        "align": {
                          "named": "stretch"
                        }
                      }
                    },
                    "children": [
                      {
                        "type": "container",
                        "properties": {
                          "padding": {
                            "edgeInsets": {
                              "top": 0,
                              "right": 0,
                              "bottom": 0,
                              "left": 0,
                              "token": "md"
                            }
                          },
                          "margin": {
                            "edgeInsets": {
                              "top": 0,
                              "right": 0,
                              "bottom": 0,
                              "left": 0,
                              "bottomToken": "lg"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "row",
                            "properties": {
                              "spacing": {
                                "stringVal": {
                                  "value": "sm"
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "container",
                                "properties": {
                                  "width": {
                                    "px": {
                                      "value": 32,
                                      "isInfinity": false
                                    }
                                  },
                                  "height": {
                                    "px": {
                                      "value": 32,
                                      "isInfinity": false
                                    }
                                  },
                                  "bg": {
                                    "color": {
                                      "color": "#1A1A1A"
                                    }
                                  },
                                  "radius": {
                                    "radius": {
                                      "topLeft": 0,
                                      "topRight": 0,
                                      "bottomLeft": 0,
                                      "bottomRight": 0,
                                      "token": "md"
                                    }
                                  },
                                  "align_child": {
                                    "align": {
                                      "named": "center"
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "icon",
                                    "properties": {
                                      "name": {
                                        "icon": {
                                          "name": "analytic_rounded"
                                        }
                                      },
                                      "color": {
                                        "color": {
                                          "color": "#FFFFFF"
                                        }
                                      },
                                      "size": {
                                        "numberVal": {
                                          "value": 18
                                        }
                                      }
                                    },
                                    "editorId": "ca6cf6ed-f70f-4b6e-8764-74baa9c8d313"
                                  }
                                ],
                                "editorId": "1cd8c0bf-a166-4e88-acc7-357348d980df"
                              },
                              {
                                "type": "text",
                                "properties": {
                                  "content": {
                                    "stringVal": {
                                      "value": "FORGE"
                                    }
                                  },
                                  "style": {
                                    "textStyle": {
                                      "styleName": "title_medium"
                                    }
                                  },
                                  "font_weight": {
                                    "numberVal": {
                                      "value": 700
                                    }
                                  },
                                  "color": {
                                    "color": {
                                      "color": "primary_text"
                                    }
                                  }
                                },
                                "editorId": "00bb12db-60c4-4781-9735-e06ce3d5945f"
                              }
                            ],
                            "editorId": "bc0899bb-1981-4320-8131-ecec7f627b7f"
                          }
                        ],
                        "editorId": "3374b1f0-e118-4298-b499-2b36fe632a6d"
                      },
                      {
                        "type": "@nav_item",
                        "properties": {
                          "icon": {
                            "stringVal": {
                              "value": "space_dashboard_rounded"
                            }
                          },
                          "label": {
                            "stringVal": {
                              "value": "Insights"
                            }
                          },
                          "active": {
                            "boolVal": {
                              "value": false
                            }
                          }
                        },
                        "editorId": "01ecf245-65ec-4ef6-bfa6-0465f14be649"
                      },
                      {
                        "type": "@nav_item",
                        "properties": {
                          "icon": {
                            "stringVal": {
                              "value": "request_quote_rounded"
                            }
                          },
                          "label": {
                            "stringVal": {
                              "value": "Quoting"
                            }
                          },
                          "active": {
                            "boolVal": {
                              "value": false
                            }
                          }
                        },
                        "editorId": "d2a0970d-6b0a-4b9f-89ca-7ac86c84ac9c"
                      },
                      {
                        "type": "@nav_item",
                        "properties": {
                          "icon": {
                            "stringVal": {
                              "value": "psychology_rounded"
                            }
                          },
                          "label": {
                            "stringVal": {
                              "value": "Technical KB"
                            }
                          },
                          "active": {
                            "boolVal": {
                              "value": false
                            }
                          }
                        },
                        "editorId": "6f825901-005b-47e6-a305-65492b3e133c"
                      },
                      {
                        "type": "@nav_item",
                        "properties": {
                          "icon": {
                            "stringVal": {
                              "value": "smart_toy_rounded"
                            }
                          },
                          "label": {
                            "stringVal": {
                              "value": "Agents"
                            }
                          },
                          "active": {
                            "boolVal": {
                              "value": true
                            }
                          }
                        },
                        "editorId": "732be35c-34a9-46cc-b196-d114d7834378"
                      },
                      {
                        "type": "spacer",
                        "editorId": "fdc89799-359e-42fd-a71b-f0a35d169f01"
                      },
                      {
                        "type": "container",
                        "properties": {
                          "padding": {
                            "edgeInsets": {
                              "top": 0,
                              "right": 0,
                              "bottom": 0,
                              "left": 0,
                              "token": "lg"
                            }
                          },
                          "radius": {
                            "radius": {
                              "topLeft": 0,
                              "topRight": 0,
                              "bottomLeft": 0,
                              "bottomRight": 0,
                              "token": "lg"
                            }
                          },
                          "bg": {
                            "color": {
                              "color": "#00000005"
                            }
                          },
                          "border": {
                            "border": {
                              "width": 1,
                              "color": "#00000005"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "column",
                            "properties": {
                              "spacing": {
                                "stringVal": {
                                  "value": "sm"
                                }
                              },
                              "cross_align": {
                                "align": {
                                  "named": "start"
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "text",
                                "properties": {
                                  "content": {
                                    "stringVal": {
                                      "value": "System Status"
                                    }
                                  },
                                  "style": {
                                    "textStyle": {
                                      "styleName": "label_small"
                                    }
                                  },
                                  "color": {
                                    "color": {
                                      "color": "secondary_text"
                                    }
                                  }
                                },
                                "editorId": "3ae18af7-11fe-442c-948b-033bf48c53d8"
                              },
                              {
                                "type": "row",
                                "properties": {
                                  "spacing": {
                                    "stringVal": {
                                      "value": "xs"
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "container",
                                    "properties": {
                                      "width": {
                                        "px": {
                                          "value": 6,
                                          "isInfinity": false
                                        }
                                      },
                                      "height": {
                                        "px": {
                                          "value": 6,
                                          "isInfinity": false
                                        }
                                      },
                                      "radius": {
                                        "radius": {
                                          "topLeft": 0,
                                          "topRight": 0,
                                          "bottomLeft": 0,
                                          "bottomRight": 0,
                                          "token": "full"
                                        }
                                      },
                                      "bg": {
                                        "color": {
                                          "color": "success"
                                        }
                                      }
                                    },
                                    "editorId": "c099c5d9-4a6c-495b-b942-4460050b4a84"
                                  },
                                  {
                                    "type": "text",
                                    "properties": {
                                      "content": {
                                        "stringVal": {
                                          "value": "All Agents Active"
                                        }
                                      },
                                      "style": {
                                        "textStyle": {
                                          "styleName": "label_small"
                                        }
                                      },
                                      "color": {
                                        "color": {
                                          "color": "primary_text"
                                        }
                                      }
                                    },
                                    "editorId": "7e882f7f-c1c7-4a86-9550-0dcc2456131d"
                                  }
                                ],
                                "editorId": "20957296-0e77-480f-a293-99c317aa5a3f"
                              }
                            ],
                            "editorId": "073cf68e-bc8a-4078-b18f-3fa4c5830b60"
                          }
                        ],
                        "editorId": "0b6323ad-4fc3-4fac-bb4f-c1477b41284f"
                      }
                    ],
                    "editorId": "333b6873-af39-40be-ba40-d7d7f6ea5872"
                  }
                ],
                "editorId": "d4be0add-f7ff-4b8b-aea0-4d3d3890a212"
              },
              {
                "type": "expanded",
                "children": [
                  {
                    "type": "column",
                    "properties": {
                      "scroll": {
                        "boolVal": {
                          "value": true
                        }
                      },
                      "padding": {
                        "edgeInsets": {
                          "top": 0,
                          "right": 0,
                          "bottom": 0,
                          "left": 0,
                          "token": "xl"
                        }
                      },
                      "spacing": {
                        "stringVal": {
                          "value": "xl"
                        }
                      },
                      "cross_align": {
                        "align": {
                          "named": "stretch"
                        }
                      }
                    },
                    "children": [
                      {
                        "type": "row",
                        "properties": {
                          "align": {
                            "align": {
                              "named": "space_between"
                            }
                          },
                          "cross_align": {
                            "align": {
                              "named": "center"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "column",
                            "properties": {
                              "cross_align": {
                                "align": {
                                  "named": "start"
                                }
                              },
                              "spacing": {
                                "stringVal": {
                                  "value": "xs"
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "text",
                                "properties": {
                                  "content": {
                                    "stringVal": {
                                      "value": "Agent Workspace"
                                    }
                                  },
                                  "style": {
                                    "textStyle": {
                                      "styleName": "headline_medium"
                                    }
                                  },
                                  "font_weight": {
                                    "numberVal": {
                                      "value": 700
                                    }
                                  },
                                  "color": {
                                    "color": {
                                      "color": "primary_text"
                                    }
                                  }
                                },
                                "editorId": "c35f214c-ff6e-4fc4-bdfe-7fe4edb80c36"
                              },
                              {
                                "type": "text",
                                "properties": {
                                  "content": {
                                    "stringVal": {
                                      "value": "Manage and deploy specialized intelligence units across your floor."
                                    }
                                  },
                                  "style": {
                                    "textStyle": {
                                      "styleName": "body_medium"
                                    }
                                  },
                                  "color": {
                                    "color": {
                                      "color": "secondary_text"
                                    }
                                  }
                                },
                                "editorId": "0ed79105-d2aa-401e-8f4c-ccbae33a79a5"
                              }
                            ],
                            "editorId": "9bacbe0e-0397-45bc-a77b-1290cdeb65df"
                          },
                          {
                            "type": "button",
                            "properties": {
                              "content": {
                                "stringVal": {
                                  "value": "Deploy New Agent"
                                }
                              },
                              "icon": {
                                "icon": {
                                  "name": "add_rounded"
                                }
                              },
                              "bg": {
                                "color": {
                                  "color": "#1A1A1A"
                                }
                              },
                              "color": {
                                "color": {
                                  "color": "#FFFFFF"
                                }
                              },
                              "radius": {
                                "radius": {
                                  "topLeft": 0,
                                  "topRight": 0,
                                  "bottomLeft": 0,
                                  "bottomRight": 0,
                                  "token": "lg"
                                }
                              },
                              "content_padding": {
                                "edgeInsets": {
                                  "top": 0,
                                  "right": 0,
                                  "bottom": 0,
                                  "left": 0,
                                  "topToken": "lg",
                                  "rightToken": "md",
                                  "bottomToken": "lg",
                                  "leftToken": "md"
                                }
                              }
                            },
                            "editorId": "d35c4ac1-cc2b-404a-a17c-c232cb090ce6"
                          }
                        ],
                        "editorId": "6fdaeebc-37cf-442b-8dbd-ce2d5eee6cf0"
                      },
                      {
                        "type": "row",
                        "properties": {
                          "spacing": {
                            "stringVal": {
                              "value": "lg"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "expanded",
                            "properties": {
                              "flex": {
                                "numberVal": {
                                  "value": 1
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "container",
                                "properties": {
                                  "bg": {
                                    "color": {
                                      "color": "#FFFFFF99"
                                    }
                                  },
                                  "backdrop_blur": {
                                    "numberVal": {
                                      "value": 10
                                    }
                                  },
                                  "radius": {
                                    "radius": {
                                      "topLeft": 0,
                                      "topRight": 0,
                                      "bottomLeft": 0,
                                      "bottomRight": 0,
                                      "token": "xl"
                                    }
                                  },
                                  "padding": {
                                    "edgeInsets": {
                                      "top": 0,
                                      "right": 0,
                                      "bottom": 0,
                                      "left": 0,
                                      "token": "lg"
                                    }
                                  },
                                  "border": {
                                    "border": {
                                      "width": 1,
                                      "color": "#00000005"
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "column",
                                    "properties": {
                                      "cross_align": {
                                        "align": {
                                          "named": "start"
                                        }
                                      },
                                      "spacing": {
                                        "stringVal": {
                                          "value": "xs"
                                        }
                                      }
                                    },
                                    "children": [
                                      {
                                        "type": "text",
                                        "properties": {
                                          "content": {
                                            "stringVal": {
                                              "value": "Active Tasks"
                                            }
                                          },
                                          "style": {
                                            "textStyle": {
                                              "styleName": "label_medium"
                                            }
                                          },
                                          "color": {
                                            "color": {
                                              "color": "secondary_text"
                                            }
                                          }
                                        },
                                        "editorId": "9b63b6db-8575-48a4-bfad-61f21f6ffb22"
                                      },
                                      {
                                        "type": "text",
                                        "properties": {
                                          "content": {
                                            "stringVal": {
                                              "value": "24"
                                            }
                                          },
                                          "style": {
                                            "textStyle": {
                                              "styleName": "headline_small"
                                            }
                                          },
                                          "font_weight": {
                                            "numberVal": {
                                              "value": 600
                                            }
                                          },
                                          "color": {
                                            "color": {
                                              "color": "primary_text"
                                            }
                                          }
                                        },
                                        "editorId": "c51cebb7-90cb-4f1d-a068-c7b5b5f082e0"
                                      }
                                    ],
                                    "editorId": "c99c41c4-c5ce-420f-9c33-4f5af586662a"
                                  }
                                ],
                                "editorId": "c3ccc3d8-2d65-456b-b99b-cdc0e0a952bb"
                              }
                            ],
                            "editorId": "58e1c9d0-7332-4808-8fc1-74c22b05f532"
                          },
                          {
                            "type": "expanded",
                            "properties": {
                              "flex": {
                                "numberVal": {
                                  "value": 1
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "container",
                                "properties": {
                                  "bg": {
                                    "color": {
                                      "color": "#FFFFFF99"
                                    }
                                  },
                                  "backdrop_blur": {
                                    "numberVal": {
                                      "value": 10
                                    }
                                  },
                                  "radius": {
                                    "radius": {
                                      "topLeft": 0,
                                      "topRight": 0,
                                      "bottomLeft": 0,
                                      "bottomRight": 0,
                                      "token": "xl"
                                    }
                                  },
                                  "padding": {
                                    "edgeInsets": {
                                      "top": 0,
                                      "right": 0,
                                      "bottom": 0,
                                      "left": 0,
                                      "token": "lg"
                                    }
                                  },
                                  "border": {
                                    "border": {
                                      "width": 1,
                                      "color": "#00000005"
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "column",
                                    "properties": {
                                      "cross_align": {
                                        "align": {
                                          "named": "start"
                                        }
                                      },
                                      "spacing": {
                                        "stringVal": {
                                          "value": "xs"
                                        }
                                      }
                                    },
                                    "children": [
                                      {
                                        "type": "text",
                                        "properties": {
                                          "content": {
                                            "stringVal": {
                                              "value": "Efficiency Gain"
                                            }
                                          },
                                          "style": {
                                            "textStyle": {
                                              "styleName": "label_medium"
                                            }
                                          },
                                          "color": {
                                            "color": {
                                              "color": "secondary_text"
                                            }
                                          }
                                        },
                                        "editorId": "307d01f2-3d4f-4866-973e-b0cf24f67cfe"
                                      },
                                      {
                                        "type": "text",
                                        "properties": {
                                          "content": {
                                            "stringVal": {
                                              "value": "+18.4%"
                                            }
                                          },
                                          "style": {
                                            "textStyle": {
                                              "styleName": "headline_small"
                                            }
                                          },
                                          "font_weight": {
                                            "numberVal": {
                                              "value": 600
                                            }
                                          },
                                          "color": {
                                            "color": {
                                              "color": "success"
                                            }
                                          }
                                        },
                                        "editorId": "d1477fe6-6c10-4d20-b0be-9ebb76f47ccf"
                                      }
                                    ],
                                    "editorId": "2cc4d6d0-5794-4037-a331-9e14add236ea"
                                  }
                                ],
                                "editorId": "8bc5db41-3bfb-4baf-ac71-55aeafe0ebbd"
                              }
                            ],
                            "editorId": "b0054d58-49ae-4e9c-9797-5fac509c32fb"
                          },
                          {
                            "type": "expanded",
                            "properties": {
                              "flex": {
                                "numberVal": {
                                  "value": 1
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "container",
                                "properties": {
                                  "bg": {
                                    "color": {
                                      "color": "#FFFFFF99"
                                    }
                                  },
                                  "backdrop_blur": {
                                    "numberVal": {
                                      "value": 10
                                    }
                                  },
                                  "radius": {
                                    "radius": {
                                      "topLeft": 0,
                                      "topRight": 0,
                                      "bottomLeft": 0,
                                      "bottomRight": 0,
                                      "token": "xl"
                                    }
                                  },
                                  "padding": {
                                    "edgeInsets": {
                                      "top": 0,
                                      "right": 0,
                                      "bottom": 0,
                                      "left": 0,
                                      "token": "lg"
                                    }
                                  },
                                  "border": {
                                    "border": {
                                      "width": 1,
                                      "color": "#00000005"
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "column",
                                    "properties": {
                                      "cross_align": {
                                        "align": {
                                          "named": "start"
                                        }
                                      },
                                      "spacing": {
                                        "stringVal": {
                                          "value": "xs"
                                        }
                                      }
                                    },
                                    "children": [
                                      {
                                        "type": "text",
                                        "properties": {
                                          "content": {
                                            "stringVal": {
                                              "value": "Compute Usage"
                                            }
                                          },
                                          "style": {
                                            "textStyle": {
                                              "styleName": "label_medium"
                                            }
                                          },
                                          "color": {
                                            "color": {
                                              "color": "secondary_text"
                                            }
                                          }
                                        },
                                        "editorId": "bfef5cca-9624-44ba-99dd-87a1e4f7d75e"
                                      },
                                      {
                                        "type": "text",
                                        "properties": {
                                          "content": {
                                            "stringVal": {
                                              "value": "62%"
                                            }
                                          },
                                          "style": {
                                            "textStyle": {
                                              "styleName": "headline_small"
                                            }
                                          },
                                          "font_weight": {
                                            "numberVal": {
                                              "value": 600
                                            }
                                          },
                                          "color": {
                                            "color": {
                                              "color": "primary_text"
                                            }
                                          }
                                        },
                                        "editorId": "744a83e9-ebde-440d-bf7b-6c3af64b1275"
                                      }
                                    ],
                                    "editorId": "13df507b-14d5-4a9e-8a54-471181845271"
                                  }
                                ],
                                "editorId": "6d5e3b73-308a-4c13-bcd1-d2858723c739"
                              }
                            ],
                            "editorId": "299c1e2a-060b-482d-82c3-5e835ac4d80c"
                          }
                        ],
                        "editorId": "240cd935-7fa2-40e9-94c7-245c0533c8ab"
                      },
                      {
                        "type": "row",
                        "properties": {
                          "spacing": {
                            "stringVal": {
                              "value": "xl"
                            }
                          },
                          "cross_align": {
                            "align": {
                              "named": "start"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "expanded",
                            "properties": {
                              "flex": {
                                "numberVal": {
                                  "value": 2
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "column",
                                "properties": {
                                  "spacing": {
                                    "stringVal": {
                                      "value": "lg"
                                    }
                                  },
                                  "cross_align": {
                                    "align": {
                                      "named": "stretch"
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "properties": {
                                      "content": {
                                        "stringVal": {
                                          "value": "Active Specialized Units"
                                        }
                                      },
                                      "style": {
                                        "textStyle": {
                                          "styleName": "title_medium"
                                        }
                                      },
                                      "font_weight": {
                                        "numberVal": {
                                          "value": 600
                                        }
                                      },
                                      "color": {
                                        "color": {
                                          "color": "primary_text"
                                        }
                                      }
                                    },
                                    "editorId": "e5a3895e-940e-4839-bdb7-e3447831072f"
                                  },
                                  {
                                    "type": "row",
                                    "properties": {
                                      "spacing": {
                                        "stringVal": {
                                          "value": "lg"
                                        }
                                      }
                                    },
                                    "children": [
                                      {
                                        "type": "expanded",
                                        "children": [
                                          {
                                            "type": "@agent_card",
                                            "properties": {
                                              "icon": {
                                                "stringVal": {
                                                  "value": "precision_manufacturing_rounded"
                                                }
                                              },
                                              "icon_bg": {
                                                "color": {
                                                  "color": "#E0F2F1"
                                                }
                                              },
                                              "name": {
                                                "stringVal": {
                                                  "value": "QC Inspector"
                                                }
                                              },
                                              "description": {
                                                "stringVal": {
                                                  "value": "Monitors batch consistency and flags thermal anomalies."
                                                }
                                              },
                                              "status": {
                                                "stringVal": {
                                                  "value": "Scanning"
                                                }
                                              },
                                              "task": {
                                                "stringVal": {
                                                  "value": "Batch #882-A"
                                                }
                                              }
                                            },
                                            "editorId": "9a4f268a-b5d8-4661-8009-fcf049688b35"
                                          }
                                        ],
                                        "editorId": "7bdfa7e6-877e-440a-bc8e-58591765d9f0"
                                      },
                                      {
                                        "type": "expanded",
                                        "children": [
                                          {
                                            "type": "@agent_card",
                                            "properties": {
                                              "icon": {
                                                "stringVal": {
                                                  "value": "inventory_2_rounded"
                                                }
                                              },
                                              "icon_bg": {
                                                "color": {
                                                  "color": "#FFF3E0"
                                                }
                                              },
                                              "name": {
                                                "stringVal": {
                                                  "value": "Supply Chain"
                                                }
                                              },
                                              "description": {
                                                "stringVal": {
                                                  "value": "Optimizes lead times and manages raw material procurement."
                                                }
                                              },
                                              "status": {
                                                "stringVal": {
                                                  "value": "Idle"
                                                }
                                              },
                                              "task": {
                                                "stringVal": {
                                                  "value": "None"
                                                }
                                              }
                                            },
                                            "editorId": "ec399b11-a83f-49b5-a75a-373b7be8dd27"
                                          }
                                        ],
                                        "editorId": "4bc326d4-2a7c-4690-a831-64a68841476a"
                                      }
                                    ],
                                    "editorId": "d5152c6e-a31c-440a-9ed3-f8facd3fbd81"
                                  },
                                  {
                                    "type": "row",
                                    "properties": {
                                      "spacing": {
                                        "stringVal": {
                                          "value": "lg"
                                        }
                                      }
                                    },
                                    "children": [
                                      {
                                        "type": "expanded",
                                        "children": [
                                          {
                                            "type": "@agent_card",
                                            "properties": {
                                              "icon": {
                                                "stringVal": {
                                                  "value": "engineering_rounded"
                                                }
                                              },
                                              "icon_bg": {
                                                "color": {
                                                  "color": "#E3F2FD"
                                                }
                                              },
                                              "name": {
                                                "stringVal": {
                                                  "value": "Maintenance"
                                                }
                                              },
                                              "description": {
                                                "stringVal": {
                                                  "value": "Predictive failure modeling for CNC and Lathe systems."
                                                }
                                              },
                                              "status": {
                                                "stringVal": {
                                                  "value": "Analyzing"
                                                }
                                              },
                                              "task": {
                                                "stringVal": {
                                                  "value": "Vibration Data"
                                                }
                                              }
                                            },
                                            "editorId": "d2c13afa-d5d6-41c1-87cb-c7cc1b5d0abe"
                                          }
                                        ],
                                        "editorId": "eabe4fac-d8d9-498f-8b58-7ace57bbfed7"
                                      },
                                      {
                                        "type": "expanded",
                                        "children": [
                                          {
                                            "type": "@agent_card",
                                            "properties": {
                                              "icon": {
                                                "stringVal": {
                                                  "value": "speed_rounded"
                                                }
                                              },
                                              "icon_bg": {
                                                "color": {
                                                  "color": "#F3E5F5"
                                                }
                                              },
                                              "name": {
                                                "stringVal": {
                                                  "value": "Throughput"
                                                }
                                              },
                                              "description": {
                                                "stringVal": {
                                                  "value": "Real-time bottleneck identification in assembly line 4."
                                                }
                                              },
                                              "status": {
                                                "stringVal": {
                                                  "value": "Optimizing"
                                                }
                                              },
                                              "task": {
                                                "stringVal": {
                                                  "value": "Line 4 Shift B"
                                                }
                                              }
                                            },
                                            "editorId": "452b5bb4-9535-4a5d-9c4e-4b5c4ba6bdc0"
                                          }
                                        ],
                                        "editorId": "9de25bf4-b89f-4114-a054-805d039d4b68"
                                      }
                                    ],
                                    "editorId": "dcf36ee4-9537-4b1e-9873-cdefe8fa3a07"
                                  }
                                ],
                                "editorId": "1a70bc63-4961-4734-b922-bcbe43eb36e3"
                              }
                            ],
                            "editorId": "46df8833-f19c-4f4b-8106-3f9516676928"
                          },
                          {
                            "type": "container",
                            "properties": {
                              "width": {
                                "px": {
                                  "value": 340,
                                  "isInfinity": false
                                }
                              },
                              "bg": {
                                "color": {
                                  "color": "#FFFFFFCC"
                                }
                              },
                              "backdrop_blur": {
                                "numberVal": {
                                  "value": 15
                                }
                              },
                              "radius": {
                                "radius": {
                                  "topLeft": 0,
                                  "topRight": 0,
                                  "bottomLeft": 0,
                                  "bottomRight": 0,
                                  "token": "xl"
                                }
                              },
                              "padding": {
                                "edgeInsets": {
                                  "top": 0,
                                  "right": 0,
                                  "bottom": 0,
                                  "left": 0,
                                  "token": "lg"
                                }
                              },
                              "border": {
                                "border": {
                                  "width": 1,
                                  "color": "#00000008"
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "column",
                                "properties": {
                                  "cross_align": {
                                    "align": {
                                      "named": "stretch"
                                    }
                                  },
                                  "spacing": {
                                    "stringVal": {
                                      "value": "lg"
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "row",
                                    "properties": {
                                      "align": {
                                        "align": {
                                          "named": "space_between"
                                        }
                                      }
                                    },
                                    "children": [
                                      {
                                        "type": "text",
                                        "properties": {
                                          "content": {
                                            "stringVal": {
                                              "value": "Live Activity"
                                            }
                                          },
                                          "style": {
                                            "textStyle": {
                                              "styleName": "title_small"
                                            }
                                          },
                                          "font_weight": {
                                            "numberVal": {
                                              "value": 600
                                            }
                                          }
                                        },
                                        "editorId": "825700a5-a2f4-498b-98cc-73d51bcc2a2c"
                                      },
                                      {
                                        "type": "chip",
                                        "properties": {
                                          "content": {
                                            "stringVal": {
                                              "value": "Live"
                                            }
                                          },
                                          "color": {
                                            "color": {
                                              "color": "success"
                                            }
                                          },
                                          "variant": {
                                            "stringVal": {
                                              "value": "filter"
                                            }
                                          },
                                          "selected": {
                                            "boolVal": {
                                              "value": true
                                            }
                                          }
                                        },
                                        "editorId": "7ddf88e2-adc6-4e60-bb51-43b355eeee72"
                                      }
                                    ],
                                    "editorId": "5253f41a-19e2-4583-a503-210ff3a32e0c"
                                  },
                                  {
                                    "type": "column",
                                    "properties": {
                                      "spacing": {
                                        "stringVal": {
                                          "value": "md"
                                        }
                                      }
                                    },
                                    "children": [
                                      {
                                        "type": "@activity_row",
                                        "properties": {
                                          "dot_color": {
                                            "stringVal": {
                                              "value": "success"
                                            }
                                          },
                                          "event": {
                                            "stringVal": {
                                              "value": "QC Inspector flagged Batch #882-A"
                                            }
                                          },
                                          "time": {
                                            "stringVal": {
                                              "value": "2 mins ago"
                                            }
                                          },
                                          "icon": {
                                            "stringVal": {
                                              "value": "visibility_rounded"
                                            }
                                          }
                                        },
                                        "editorId": "3dfb4fb7-92c7-4bee-8329-f6c18962212d"
                                      },
                                      {
                                        "type": "@activity_row",
                                        "properties": {
                                          "dot_color": {
                                            "stringVal": {
                                              "value": "primary"
                                            }
                                          },
                                          "event": {
                                            "stringVal": {
                                              "value": "Maintenance Agent updated CNC model"
                                            }
                                          },
                                          "time": {
                                            "stringVal": {
                                              "value": "14 mins ago"
                                            }
                                          },
                                          "icon": {
                                            "stringVal": {
                                              "value": "update_rounded"
                                            }
                                          }
                                        },
                                        "editorId": "64a67007-2546-4fc3-8770-aa5433fac9a9"
                                      },
                                      {
                                        "type": "@activity_row",
                                        "properties": {
                                          "dot_color": {
                                            "stringVal": {
                                              "value": "success"
                                            }
                                          },
                                          "event": {
                                            "stringVal": {
                                              "value": "Throughput Agent resolved Line 4 delay"
                                            }
                                          },
                                          "time": {
                                            "stringVal": {
                                              "value": "28 mins ago"
                                            }
                                          },
                                          "icon": {
                                            "stringVal": {
                                              "value": "check_circle_outline_rounded"
                                            }
                                          }
                                        },
                                        "editorId": "a2e0904d-bbb3-47db-ad75-48daccf9f337"
                                      },
                                      {
                                        "type": "@activity_row",
                                        "properties": {
                                          "dot_color": {
                                            "color": {
                                              "color": "#E0E0E0"
                                            }
                                          },
                                          "event": {
                                            "stringVal": {
                                              "value": "Supply Chain Agent standby"
                                            }
                                          },
                                          "time": {
                                            "stringVal": {
                                              "value": "1 hr ago"
                                            }
                                          },
                                          "icon": {
                                            "stringVal": {
                                              "value": "sleep_rounded"
                                            }
                                          }
                                        },
                                        "editorId": "fde28087-c59a-4ba6-871d-1fdee97c46ff"
                                      },
                                      {
                                        "type": "@activity_row",
                                        "properties": {
                                          "dot_color": {
                                            "stringVal": {
                                              "value": "success"
                                            }
                                          },
                                          "event": {
                                            "stringVal": {
                                              "value": "New training data ingested"
                                            }
                                          },
                                          "time": {
                                            "stringVal": {
                                              "value": "3 hrs ago"
                                            }
                                          },
                                          "icon": {
                                            "stringVal": {
                                              "value": "storage_rounded"
                                            }
                                          }
                                        },
                                        "editorId": "10f6b755-c515-4fd8-9006-73e0d36e5ec2"
                                      }
                                    ],
                                    "editorId": "6c319721-a90f-4fb1-852c-462379dc9f72"
                                  },
                                  {
                                    "type": "divider",
                                    "properties": {
                                      "color": {
                                        "color": {
                                          "color": "divider"
                                        }
                                      }
                                    },
                                    "editorId": "4d54e5a7-e381-4df9-adf6-8dd277c219c4"
                                  },
                                  {
                                    "type": "container",
                                    "properties": {
                                      "bg": {
                                        "color": {
                                          "color": "#00000005"
                                        }
                                      },
                                      "radius": {
                                        "radius": {
                                          "topLeft": 0,
                                          "topRight": 0,
                                          "bottomLeft": 0,
                                          "bottomRight": 0,
                                          "token": "lg"
                                        }
                                      },
                                      "padding": {
                                        "edgeInsets": {
                                          "top": 0,
                                          "right": 0,
                                          "bottom": 0,
                                          "left": 0,
                                          "token": "md"
                                        }
                                      }
                                    },
                                    "children": [
                                      {
                                        "type": "column",
                                        "properties": {
                                          "spacing": {
                                            "stringVal": {
                                              "value": "sm"
                                            }
                                          },
                                          "cross_align": {
                                            "align": {
                                              "named": "start"
                                            }
                                          }
                                        },
                                        "children": [
                                          {
                                            "type": "text",
                                            "properties": {
                                              "content": {
                                                "stringVal": {
                                                  "value": "Agent Performance"
                                                }
                                              },
                                              "style": {
                                                "textStyle": {
                                                  "styleName": "label_small"
                                                }
                                              },
                                              "font_weight": {
                                                "numberVal": {
                                                  "value": 600
                                                }
                                              },
                                              "color": {
                                                "color": {
                                                  "color": "secondary_text"
                                                }
                                              }
                                            },
                                            "editorId": "68510610-04b8-43ec-a17e-7f946022e2e5"
                                          },
                                          {
                                            "type": "container",
                                            "properties": {
                                              "height": {
                                                "px": {
                                                  "value": 120,
                                                  "isInfinity": false
                                                }
                                              },
                                              "width": {
                                                "px": {
                                                  "value": "Infinity",
                                                  "isInfinity": true
                                                }
                                              }
                                            },
                                            "children": [
                                              {
                                                "type": "line_chart",
                                                "properties": {
                                                  "data": {
                                                    "stringVal": {
                                                      "value": "20,45,30,60,55,80"
                                                    }
                                                  },
                                                  "labels": {
                                                    "stringVal": {
                                                      "value": "M,T,W,T,F,S"
                                                    }
                                                  },
                                                  "color": {
                                                    "color": {
                                                      "color": "primary"
                                                    }
                                                  },
                                                  "curved": {
                                                    "boolVal": {
                                                      "value": true
                                                    }
                                                  },
                                                  "filled": {
                                                    "boolVal": {
                                                      "value": true
                                                    }
                                                  },
                                                  "fill_opacity": {
                                                    "numberVal": {
                                                      "value": 0.1
                                                    }
                                                  },
                                                  "show_dots": {
                                                    "boolVal": {
                                                      "value": false
                                                    }
                                                  }
                                                },
                                                "editorId": "f2b2ed54-4567-4afa-bca9-543bac3da12e"
                                              }
                                            ],
                                            "editorId": "ea1b6523-271a-4ee3-8786-bcee30f40c64"
                                          }
                                        ],
                                        "editorId": "05789346-f743-414b-a246-2f45e606613a"
                                      }
                                    ],
                                    "editorId": "01060a31-b7e8-4308-8024-beb67afcc0a4"
                                  }
                                ],
                                "editorId": "d8ee5749-bb2b-4c9a-a9ac-52d636491e09"
                              }
                            ],
                            "editorId": "91fd836a-3714-4fe7-ad8c-f762a0d5bf98"
                          }
                        ],
                        "editorId": "ef90055a-a554-4172-aaa0-0a18ce48d26e"
                      }
                    ],
                    "editorId": "08db2788-2111-4992-b216-d46bb9f4cf23"
                  }
                ],
                "editorId": "35a073e0-944d-421b-8b23-0fa9693c0a40"
              }
            ],
            "editorId": "391ee951-6dcc-48a8-b42f-7a555748a571"
          }
        ],
        "editorId": "e8b96e92-4634-42bd-bee8-fca92e9f1508"
      }
    ],
    "editorId": "6b4f41d9-bb5e-45f1-90d6-8fd718e8639e"
  },
  "components": [
    {
      "name": "nav_item",
      "root": {
        "type": "container",
        "properties": {
          "padding": {
            "edgeInsets": {
              "top": 0,
              "right": 0,
              "bottom": 0,
              "left": 0,
              "topToken": "md",
              "rightToken": "lg",
              "bottomToken": "md",
              "leftToken": "lg"
            }
          },
          "radius": {
            "radius": {
              "topLeft": 0,
              "topRight": 0,
              "bottomLeft": 0,
              "bottomRight": 0,
              "token": "md"
            }
          },
          "bg": {
            "conditional": {
              "conditionSlot": "active",
              "trueValue": {
                "color": {
                  "color": "#0000000A"
                }
              },
              "falseValue": {
                "color": {
                  "color": "transparent"
                }
              }
            }
          }
        },
        "children": [
          {
            "type": "row",
            "properties": {
              "spacing": {
                "stringVal": {
                  "value": "md"
                }
              }
            },
            "children": [
              {
                "type": "icon",
                "properties": {
                  "name": {
                    "slot": {
                      "name": "icon"
                    }
                  },
                  "size": {
                    "numberVal": {
                      "value": 20
                    }
                  },
                  "color": {
                    "conditional": {
                      "conditionSlot": "active",
                      "trueValue": {
                        "color": {
                          "color": "primary_text"
                        }
                      },
                      "falseValue": {
                        "color": {
                          "color": "secondary_text"
                        }
                      }
                    }
                  }
                },
                "editorId": "fd1cacd5-75eb-4a30-9996-fa08446c1b38"
              },
              {
                "type": "text",
                "properties": {
                  "content": {
                    "slot": {
                      "name": "label"
                    }
                  },
                  "style": {
                    "textStyle": {
                      "styleName": "body_medium"
                    }
                  },
                  "color": {
                    "conditional": {
                      "conditionSlot": "active",
                      "trueValue": {
                        "color": {
                          "color": "primary_text"
                        }
                      },
                      "falseValue": {
                        "color": {
                          "color": "secondary_text"
                        }
                      }
                    }
                  },
                  "font_weight": {
                    "conditional": {
                      "conditionSlot": "active",
                      "trueValue": {
                        "numberVal": {
                          "value": 600
                        }
                      },
                      "falseValue": {
                        "numberVal": {
                          "value": 400
                        }
                      }
                    }
                  }
                },
                "editorId": "f642eb31-cf53-42cd-9bb3-6cc77bca745b"
              }
            ],
            "editorId": "4bb682cf-eeb1-4284-acb3-fb3cd590ed34"
          }
        ],
        "editorId": "a9c3e8c1-ca92-4b79-9fe5-63728e27889c"
      }
    },
    {
      "name": "agent_card",
      "root": {
        "type": "container",
        "properties": {
          "bg": {
            "color": {
              "color": "surface"
            }
          },
          "radius": {
            "radius": {
              "topLeft": 0,
              "topRight": 0,
              "bottomLeft": 0,
              "bottomRight": 0,
              "token": "xl"
            }
          },
          "padding": {
            "edgeInsets": {
              "top": 0,
              "right": 0,
              "bottom": 0,
              "left": 0,
              "token": "lg"
            }
          },
          "border": {
            "border": {
              "width": 1,
              "color": "#00000008"
            }
          },
          "shadow": {
            "stringVal": {
              "value": "sm"
            }
          }
        },
        "children": [
          {
            "type": "column",
            "properties": {
              "cross_align": {
                "align": {
                  "named": "start"
                }
              },
              "spacing": {
                "stringVal": {
                  "value": "md"
                }
              }
            },
            "children": [
              {
                "type": "row",
                "properties": {
                  "align": {
                    "align": {
                      "named": "space_between"
                    }
                  }
                },
                "children": [
                  {
                    "type": "container",
                    "properties": {
                      "width": {
                        "px": {
                          "value": 48,
                          "isInfinity": false
                        }
                      },
                      "height": {
                        "px": {
                          "value": 48,
                          "isInfinity": false
                        }
                      },
                      "radius": {
                        "radius": {
                          "topLeft": 0,
                          "topRight": 0,
                          "bottomLeft": 0,
                          "bottomRight": 0,
                          "token": "lg"
                        }
                      },
                      "bg": {
                        "slot": {
                          "name": "icon_bg"
                        }
                      },
                      "align_child": {
                        "align": {
                          "named": "center"
                        }
                      }
                    },
                    "children": [
                      {
                        "type": "icon",
                        "properties": {
                          "name": {
                            "slot": {
                              "name": "icon"
                            }
                          },
                          "color": {
                            "color": {
                              "color": "primary_text"
                            }
                          },
                          "size": {
                            "numberVal": {
                              "value": 24
                            }
                          }
                        },
                        "editorId": "eaab6569-648a-4432-becd-b0ef5f60cd8e"
                      }
                    ],
                    "editorId": "b0cca02e-6032-49e8-915c-75d4bfee8dfa"
                  },
                  {
                    "type": "container",
                    "properties": {
                      "padding": {
                        "edgeInsets": {
                          "top": 0,
                          "right": 0,
                          "bottom": 0,
                          "left": 0,
                          "topToken": "xs",
                          "rightToken": "sm",
                          "bottomToken": "xs",
                          "leftToken": "sm"
                        }
                      },
                      "radius": {
                        "radius": {
                          "topLeft": 0,
                          "topRight": 0,
                          "bottomLeft": 0,
                          "bottomRight": 0,
                          "token": "full"
                        }
                      },
                      "bg": {
                        "color": {
                          "color": "#F5F5F5"
                        }
                      },
                      "border": {
                        "border": {
                          "width": 1,
                          "color": "divider"
                        }
                      }
                    },
                    "children": [
                      {
                        "type": "text",
                        "properties": {
                          "content": {
                            "slot": {
                              "name": "status"
                            }
                          },
                          "style": {
                            "textStyle": {
                              "styleName": "label_small"
                            }
                          },
                          "color": {
                            "color": {
                              "color": "secondary_text"
                            }
                          }
                        },
                        "editorId": "81f3123d-7568-453e-b0ae-47661a23de2f"
                      }
                    ],
                    "editorId": "da120316-319e-4f0a-8091-9a828ac8964a"
                  }
                ],
                "editorId": "ae9439a0-4f32-40d6-9737-024627833336"
              },
              {
                "type": "column",
                "properties": {
                  "cross_align": {
                    "align": {
                      "named": "start"
                    }
                  },
                  "spacing": {
                    "stringVal": {
                      "value": "xs"
                    }
                  }
                },
                "children": [
                  {
                    "type": "text",
                    "properties": {
                      "content": {
                        "slot": {
                          "name": "name"
                        }
                      },
                      "style": {
                        "textStyle": {
                          "styleName": "title_medium"
                        }
                      },
                      "font_weight": {
                        "numberVal": {
                          "value": 600
                        }
                      },
                      "color": {
                        "color": {
                          "color": "primary_text"
                        }
                      }
                    },
                    "editorId": "50eef55d-b6ff-4070-b68b-bcd3e679852e"
                  },
                  {
                    "type": "text",
                    "properties": {
                      "content": {
                        "slot": {
                          "name": "description"
                        }
                      },
                      "style": {
                        "textStyle": {
                          "styleName": "body_small"
                        }
                      },
                      "color": {
                        "color": {
                          "color": "secondary_text"
                        }
                      },
                      "max_lines": {
                        "numberVal": {
                          "value": 2
                        }
                      },
                      "overflow": {
                        "stringVal": {
                          "value": "ellipsis"
                        }
                      }
                    },
                    "editorId": "f1ae57a9-3087-4352-b253-291e1fb86b88"
                  }
                ],
                "editorId": "f77ba9c5-a6ef-47d6-ae92-7672ed27dc55"
              },
              {
                "type": "divider",
                "properties": {
                  "color": {
                    "color": {
                      "color": "divider"
                    }
                  }
                },
                "editorId": "f4c6dbdc-e8ea-466d-b2cc-ce8fb26d64fc"
              },
              {
                "type": "row",
                "properties": {
                  "align": {
                    "align": {
                      "named": "space_between"
                    }
                  }
                },
                "children": [
                  {
                    "type": "column",
                    "properties": {
                      "cross_align": {
                        "align": {
                          "named": "start"
                        }
                      }
                    },
                    "children": [
                      {
                        "type": "text",
                        "properties": {
                          "content": {
                            "stringVal": {
                              "value": "Current Task"
                            }
                          },
                          "style": {
                            "textStyle": {
                              "styleName": "label_small"
                            }
                          },
                          "color": {
                            "color": {
                              "color": "hint"
                            }
                          }
                        },
                        "editorId": "3ae52aa6-81c3-4989-b47e-ce895a8857e3"
                      },
                      {
                        "type": "text",
                        "properties": {
                          "content": {
                            "slot": {
                              "name": "task"
                            }
                          },
                          "style": {
                            "textStyle": {
                              "styleName": "body_small"
                            }
                          },
                          "color": {
                            "color": {
                              "color": "primary_text"
                            }
                          },
                          "font_weight": {
                            "numberVal": {
                              "value": 500
                            }
                          },
                          "max_lines": {
                            "numberVal": {
                              "value": 1
                            }
                          }
                        },
                        "editorId": "c440fa16-8b4d-4f9a-818d-c3ffe6eb7bc3"
                      }
                    ],
                    "editorId": "6acb5bba-aa2e-4a07-8e9d-8cd91603faf5"
                  },
                  {
                    "type": "iconbutton",
                    "properties": {
                      "name": {
                        "icon": {
                          "name": "arrow_forward_rounded"
                        }
                      },
                      "size": {
                        "numberVal": {
                          "value": 20
                        }
                      },
                      "color": {
                        "color": {
                          "color": "secondary_text"
                        }
                      }
                    },
                    "editorId": "ca79f2c4-4548-4c01-bcf6-6e02cdb62a95"
                  }
                ],
                "editorId": "6edd2179-a360-459f-9e7e-7f4a4cd9e70a"
              }
            ],
            "editorId": "d51c0533-407d-411c-adb8-81b171746a0e"
          }
        ],
        "editorId": "8547f643-5e3d-4c23-8ecb-eaa526f1140d"
      }
    },
    {
      "name": "activity_row",
      "root": {
        "type": "row",
        "properties": {
          "spacing": {
            "stringVal": {
              "value": "md"
            }
          },
          "padding": {
            "edgeInsets": {
              "top": 0,
              "right": 0,
              "bottom": 0,
              "left": 0,
              "topToken": "sm",
              "bottomToken": "sm"
            }
          }
        },
        "children": [
          {
            "type": "container",
            "properties": {
              "width": {
                "px": {
                  "value": 8,
                  "isInfinity": false
                }
              },
              "height": {
                "px": {
                  "value": 8,
                  "isInfinity": false
                }
              },
              "radius": {
                "radius": {
                  "topLeft": 0,
                  "topRight": 0,
                  "bottomLeft": 0,
                  "bottomRight": 0,
                  "token": "full"
                }
              },
              "bg": {
                "slot": {
                  "name": "dot_color"
                }
              }
            },
            "editorId": "dd45a5c0-6b44-4f1d-b72d-27784bbe1b63"
          },
          {
            "type": "expanded",
            "children": [
              {
                "type": "column",
                "properties": {
                  "cross_align": {
                    "align": {
                      "named": "start"
                    }
                  }
                },
                "children": [
                  {
                    "type": "text",
                    "properties": {
                      "content": {
                        "slot": {
                          "name": "event"
                        }
                      },
                      "style": {
                        "textStyle": {
                          "styleName": "body_small"
                        }
                      },
                      "color": {
                        "color": {
                          "color": "primary_text"
                        }
                      },
                      "max_lines": {
                        "numberVal": {
                          "value": 1
                        }
                      },
                      "overflow": {
                        "stringVal": {
                          "value": "ellipsis"
                        }
                      }
                    },
                    "editorId": "98136a4e-317b-4868-ad56-63ae54f60ac7"
                  },
                  {
                    "type": "text",
                    "properties": {
                      "content": {
                        "slot": {
                          "name": "time"
                        }
                      },
                      "style": {
                        "textStyle": {
                          "styleName": "label_small"
                        }
                      },
                      "color": {
                        "color": {
                          "color": "hint"
                        }
                      }
                    },
                    "editorId": "5f8215ed-c096-4099-9fbb-195f1b78b672"
                  }
                ],
                "editorId": "8bc19c50-8017-4394-abc0-43aebd73a7fc"
              }
            ],
            "editorId": "f30e38c3-ab1f-4915-87d8-25ca777e2df4"
          },
          {
            "type": "icon",
            "properties": {
              "name": {
                "slot": {
                  "name": "icon"
                }
              },
              "size": {
                "numberVal": {
                  "value": 16
                }
              },
              "color": {
                "color": {
                  "color": "secondary_text"
                }
              }
            },
            "editorId": "a6346d1f-2d57-4a72-ac51-1eed37c7315e"
          }
        ],
        "editorId": "d89aee6b-1ec7-4aa0-8979-b6c06a065fb3"
      }
    }
  ]
}
```

### 5. Document Library

- Frame ID: `8ce4047c-f2f1-48fa-9704-3975860cbfb2`
- Original page prompt: "A quiet, composed file management view for technical docs with minimal borders and smoke-tinted neutrals."
- Follow-up prompts: _None_

#### DslDocument (JSON)

```json
{
  "root": {
    "type": "scaffold",
    "properties": {
      "bg": {
        "color": {
          "color": "#F2F4F7"
        }
      },
      "safe_area": {
        "boolVal": {
          "value": true
        }
      }
    },
    "children": [
      {
        "type": "stack",
        "children": [
          {
            "type": "container",
            "properties": {
              "width": {
                "px": {
                  "value": "Infinity",
                  "isInfinity": true
                }
              },
              "height": {
                "px": {
                  "value": "Infinity",
                  "isInfinity": true
                }
              },
              "gradient": {
                "gradient": {
                  "type": "GRADIENT_TYPE_RADIAL",
                  "direction": "top_left",
                  "stops": [
                    {
                      "color": "#E0E7FF",
                      "position": 0
                    },
                    {
                      "color": "#F2F4F7",
                      "position": 60
                    }
                  ]
                }
              }
            },
            "editorId": "b8b57aad-00b9-41dc-85ab-05cbbed14fec"
          },
          {
            "type": "row",
            "properties": {
              "cross_align": {
                "align": {
                  "named": "stretch"
                }
              }
            },
            "children": [
              {
                "type": "container",
                "properties": {
                  "width": {
                    "px": {
                      "value": 260,
                      "isInfinity": false
                    }
                  },
                  "bg": {
                    "color": {
                      "color": "#FFFFFF88"
                    }
                  },
                  "backdrop_blur": {
                    "numberVal": {
                      "value": 20
                    }
                  },
                  "border": {
                    "borderSided": {
                      "side": "right",
                      "width": 1,
                      "color": "#00000008"
                    }
                  },
                  "padding": {
                    "edgeInsets": {
                      "top": 0,
                      "right": 0,
                      "bottom": 0,
                      "left": 0,
                      "topToken": "lg",
                      "rightToken": "md",
                      "bottomToken": "lg",
                      "leftToken": "md"
                    }
                  }
                },
                "children": [
                  {
                    "type": "column",
                    "properties": {
                      "cross_align": {
                        "align": {
                          "named": "stretch"
                        }
                      },
                      "spacing": {
                        "stringVal": {
                          "value": "lg"
                        }
                      }
                    },
                    "children": [
                      {
                        "type": "row",
                        "properties": {
                          "padding": {
                            "edgeInsets": {
                              "top": 0,
                              "right": 0,
                              "bottom": 0,
                              "left": 0,
                              "token": "md"
                            }
                          },
                          "spacing": {
                            "stringVal": {
                              "value": "sm"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "container",
                            "properties": {
                              "width": {
                                "px": {
                                  "value": 32,
                                  "isInfinity": false
                                }
                              },
                              "height": {
                                "px": {
                                  "value": 32,
                                  "isInfinity": false
                                }
                              },
                              "radius": {
                                "radius": {
                                  "topLeft": 0,
                                  "topRight": 0,
                                  "bottomLeft": 0,
                                  "bottomRight": 0,
                                  "token": "lg"
                                }
                              },
                              "bg": {
                                "color": {
                                  "color": "primary_text"
                                }
                              },
                              "align_child": {
                                "align": {
                                  "named": "center"
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "icon",
                                "properties": {
                                  "name": {
                                    "icon": {
                                      "name": "memory_rounded"
                                    }
                                  },
                                  "color": {
                                    "color": {
                                      "color": "background"
                                    }
                                  },
                                  "size": {
                                    "numberVal": {
                                      "value": 18
                                    }
                                  }
                                },
                                "editorId": "d2d0bec5-e068-4e35-a97d-fac22369a667"
                              }
                            ],
                            "editorId": "a6dc8008-af5e-4f16-81cb-00c99f1c1320"
                          },
                          {
                            "type": "text",
                            "properties": {
                              "content": {
                                "stringVal": {
                                  "value": "FORGE"
                                }
                              },
                              "style": {
                                "textStyle": {
                                  "styleName": "title_medium"
                                }
                              },
                              "font_weight": {
                                "numberVal": {
                                  "value": 800
                                }
                              },
                              "color": {
                                "color": {
                                  "color": "primary_text"
                                }
                              }
                            },
                            "editorId": "9c9ac22b-2a52-45b5-95eb-0e2ed4adca24"
                          }
                        ],
                        "editorId": "70b92a68-c02d-495f-a1ea-b6f649e00ff8"
                      },
                      {
                        "type": "column",
                        "properties": {
                          "spacing": {
                            "stringVal": {
                              "value": "xs"
                            }
                          },
                          "cross_align": {
                            "align": {
                              "named": "stretch"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "@sidebar_item",
                            "properties": {
                              "icon": {
                                "stringVal": {
                                  "value": "dashboard_customize_rounded"
                                }
                              },
                              "label": {
                                "stringVal": {
                                  "value": "Insights"
                                }
                              },
                              "active": {
                                "boolVal": {
                                  "value": false
                                }
                              }
                            },
                            "editorId": "f7804d55-93cb-499c-aebf-1e2203ad5a9a"
                          },
                          {
                            "type": "@sidebar_item",
                            "properties": {
                              "icon": {
                                "stringVal": {
                                  "value": "request_quote_rounded"
                                }
                              },
                              "label": {
                                "stringVal": {
                                  "value": "Quoting"
                                }
                              },
                              "active": {
                                "boolVal": {
                                  "value": false
                                }
                              }
                            },
                            "editorId": "301d0e43-de5e-4dce-9bde-71bb36f2d47a"
                          },
                          {
                            "type": "@sidebar_item",
                            "properties": {
                              "icon": {
                                "stringVal": {
                                  "value": "auto_awesome_rounded"
                                }
                              },
                              "label": {
                                "stringVal": {
                                  "value": "Knowledge Base"
                                }
                              },
                              "active": {
                                "boolVal": {
                                  "value": false
                                }
                              }
                            },
                            "editorId": "b66982d9-d414-4fdb-b51f-85286ca607de"
                          },
                          {
                            "type": "@sidebar_item",
                            "properties": {
                              "icon": {
                                "stringVal": {
                                  "value": "folder_copy_rounded"
                                }
                              },
                              "label": {
                                "stringVal": {
                                  "value": "Documents"
                                }
                              },
                              "active": {
                                "boolVal": {
                                  "value": true
                                }
                              }
                            },
                            "editorId": "115918c0-9fa3-4034-8f15-ba53c1a0ff31"
                          },
                          {
                            "type": "@sidebar_item",
                            "properties": {
                              "icon": {
                                "stringVal": {
                                  "value": "smart_toy_rounded"
                                }
                              },
                              "label": {
                                "stringVal": {
                                  "value": "Agents"
                                }
                              },
                              "active": {
                                "boolVal": {
                                  "value": false
                                }
                              }
                            },
                            "editorId": "079abcad-77e9-4566-872a-b7ed3933e25e"
                          }
                        ],
                        "editorId": "ac7a6362-5c6d-4f72-adc0-97b970d2714d"
                      },
                      {
                        "type": "spacer",
                        "editorId": "521495e1-b66a-45f8-9f0c-1ca43bd1ae66"
                      },
                      {
                        "type": "container",
                        "properties": {
                          "bg": {
                            "color": {
                              "color": "#00000005"
                            }
                          },
                          "radius": {
                            "radius": {
                              "topLeft": 0,
                              "topRight": 0,
                              "bottomLeft": 0,
                              "bottomRight": 0,
                              "token": "lg"
                            }
                          },
                          "padding": {
                            "edgeInsets": {
                              "top": 0,
                              "right": 0,
                              "bottom": 0,
                              "left": 0,
                              "token": "md"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "row",
                            "properties": {
                              "spacing": {
                                "stringVal": {
                                  "value": "md"
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "avatar",
                                "properties": {
                                  "text": {
                                    "stringVal": {
                                      "value": "JD"
                                    }
                                  },
                                  "bg": {
                                    "color": {
                                      "color": "primary_text"
                                    }
                                  },
                                  "color": {
                                    "color": {
                                      "color": "background"
                                    }
                                  },
                                  "size": {
                                    "numberVal": {
                                      "value": 32
                                    }
                                  }
                                },
                                "editorId": "5b110061-a054-4c90-99aa-3858da98d58d"
                              },
                              {
                                "type": "expanded",
                                "children": [
                                  {
                                    "type": "column",
                                    "properties": {
                                      "cross_align": {
                                        "align": {
                                          "named": "start"
                                        }
                                      }
                                    },
                                    "children": [
                                      {
                                        "type": "text",
                                        "properties": {
                                          "content": {
                                            "stringVal": {
                                              "value": "Julian Doss"
                                            }
                                          },
                                          "style": {
                                            "textStyle": {
                                              "styleName": "body_small"
                                            }
                                          },
                                          "font_weight": {
                                            "numberVal": {
                                              "value": 600
                                            }
                                          },
                                          "color": {
                                            "color": {
                                              "color": "primary_text"
                                            }
                                          }
                                        },
                                        "editorId": "3f1b6c7f-8f58-42d1-a48b-f6a0212d1821"
                                      },
                                      {
                                        "type": "text",
                                        "properties": {
                                          "content": {
                                            "stringVal": {
                                              "value": "Admin"
                                            }
                                          },
                                          "style": {
                                            "textStyle": {
                                              "styleName": "label_small"
                                            }
                                          },
                                          "color": {
                                            "color": {
                                              "color": "secondary_text"
                                            }
                                          }
                                        },
                                        "editorId": "8d5762e2-0781-4cd1-8516-b2a26ffa78c3"
                                      }
                                    ],
                                    "editorId": "09001410-1e96-4403-a9ca-d089caee2488"
                                  }
                                ],
                                "editorId": "54c3b599-a515-4cbc-8b5c-3af8cfaa6968"
                              },
                              {
                                "type": "icon",
                                "properties": {
                                  "name": {
                                    "icon": {
                                      "name": "settings_rounded"
                                    }
                                  },
                                  "size": {
                                    "numberVal": {
                                      "value": 16
                                    }
                                  },
                                  "color": {
                                    "color": {
                                      "color": "hint"
                                    }
                                  }
                                },
                                "editorId": "8fafb51c-3a12-434a-9057-46a6569e5156"
                              }
                            ],
                            "editorId": "fefd4f48-9475-42d2-8e38-92f18b92828c"
                          }
                        ],
                        "editorId": "1dc41981-f275-4f17-af58-45f3db444c7d"
                      }
                    ],
                    "editorId": "baff598f-28fd-461d-aed6-dd233e867131"
                  }
                ],
                "editorId": "c687d226-4d17-4d25-9458-9e73cd5264ec"
              },
              {
                "type": "expanded",
                "children": [
                  {
                    "type": "column",
                    "properties": {
                      "scroll": {
                        "boolVal": {
                          "value": true
                        }
                      },
                      "padding": {
                        "edgeInsets": {
                          "top": 0,
                          "right": 0,
                          "bottom": 0,
                          "left": 0,
                          "token": "xl"
                        }
                      },
                      "spacing": {
                        "stringVal": {
                          "value": "xl"
                        }
                      },
                      "cross_align": {
                        "align": {
                          "named": "stretch"
                        }
                      }
                    },
                    "children": [
                      {
                        "type": "row",
                        "properties": {
                          "align": {
                            "align": {
                              "named": "space_between"
                            }
                          },
                          "cross_align": {
                            "align": {
                              "named": "center"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "column",
                            "properties": {
                              "cross_align": {
                                "align": {
                                  "named": "start"
                                }
                              },
                              "spacing": {
                                "stringVal": {
                                  "value": "xs"
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "text",
                                "properties": {
                                  "content": {
                                    "stringVal": {
                                      "value": "Document Library"
                                    }
                                  },
                                  "style": {
                                    "textStyle": {
                                      "styleName": "headline_medium"
                                    }
                                  },
                                  "font_weight": {
                                    "numberVal": {
                                      "value": 700
                                    }
                                  },
                                  "color": {
                                    "color": {
                                      "color": "primary_text"
                                    }
                                  }
                                },
                                "editorId": "3936ab9a-54fc-4fdb-8a73-2b2638a46500"
                              },
                              {
                                "type": "text",
                                "properties": {
                                  "content": {
                                    "stringVal": {
                                      "value": "Technical specifications and manufacturing manuals"
                                    }
                                  },
                                  "style": {
                                    "textStyle": {
                                      "styleName": "body_medium"
                                    }
                                  },
                                  "color": {
                                    "color": {
                                      "color": "secondary_text"
                                    }
                                  }
                                },
                                "editorId": "f1969c8c-318f-498e-8b1f-c99efcd2ba69"
                              }
                            ],
                            "editorId": "55feb9ac-2bef-41d6-bb4b-6e92fcf788b8"
                          },
                          {
                            "type": "row",
                            "properties": {
                              "spacing": {
                                "stringVal": {
                                  "value": "md"
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "container",
                                "properties": {
                                  "width": {
                                    "px": {
                                      "value": 300,
                                      "isInfinity": false
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "textfield",
                                    "properties": {
                                      "hint": {
                                        "stringVal": {
                                          "value": "Search files..."
                                        }
                                      },
                                      "prefix_icon": {
                                        "stringVal": {
                                          "value": "search_rounded"
                                        }
                                      },
                                      "filled": {
                                        "boolVal": {
                                          "value": true
                                        }
                                      },
                                      "bg": {
                                        "color": {
                                          "color": "surface"
                                        }
                                      },
                                      "radius": {
                                        "radius": {
                                          "topLeft": 0,
                                          "topRight": 0,
                                          "bottomLeft": 0,
                                          "bottomRight": 0,
                                          "token": "md"
                                        }
                                      },
                                      "border": {
                                        "border": {
                                          "width": 1,
                                          "color": "#00000008"
                                        }
                                      }
                                    },
                                    "editorId": "8dd012d9-11d6-4d97-b34f-557d1c77ed60"
                                  }
                                ],
                                "editorId": "bde865fd-5f06-417e-88bc-84ceaf2abcb4"
                              },
                              {
                                "type": "button",
                                "properties": {
                                  "content": {
                                    "stringVal": {
                                      "value": "Upload File"
                                    }
                                  },
                                  "icon": {
                                    "icon": {
                                      "name": "add_rounded"
                                    }
                                  },
                                  "bg": {
                                    "color": {
                                      "color": "primary_text"
                                    }
                                  },
                                  "color": {
                                    "color": {
                                      "color": "background"
                                    }
                                  },
                                  "radius": {
                                    "radius": {
                                      "topLeft": 0,
                                      "topRight": 0,
                                      "bottomLeft": 0,
                                      "bottomRight": 0,
                                      "token": "md"
                                    }
                                  },
                                  "content_padding": {
                                    "edgeInsets": {
                                      "top": 0,
                                      "right": 0,
                                      "bottom": 0,
                                      "left": 0,
                                      "topToken": "lg",
                                      "rightToken": "md",
                                      "bottomToken": "lg",
                                      "leftToken": "md"
                                    }
                                  }
                                },
                                "editorId": "01dbaaf7-ad1d-489e-8ded-85fc10423494"
                              }
                            ],
                            "editorId": "ca72a7b1-bc6b-4eeb-974a-25c5da1ab48b"
                          }
                        ],
                        "editorId": "8a15a68f-f7e3-4ca7-bd27-2c9a7b4d7b82"
                      },
                      {
                        "type": "row",
                        "properties": {
                          "spacing": {
                            "stringVal": {
                              "value": "lg"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "expanded",
                            "properties": {
                              "flex": {
                                "numberVal": {
                                  "value": 1
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "container",
                                "properties": {
                                  "bg": {
                                    "color": {
                                      "color": "#FFFFFF66"
                                    }
                                  },
                                  "backdrop_blur": {
                                    "numberVal": {
                                      "value": 10
                                    }
                                  },
                                  "radius": {
                                    "radius": {
                                      "topLeft": 0,
                                      "topRight": 0,
                                      "bottomLeft": 0,
                                      "bottomRight": 0,
                                      "token": "lg"
                                    }
                                  },
                                  "padding": {
                                    "edgeInsets": {
                                      "top": 0,
                                      "right": 0,
                                      "bottom": 0,
                                      "left": 0,
                                      "token": "lg"
                                    }
                                  },
                                  "border": {
                                    "border": {
                                      "width": 1,
                                      "color": "#FFFFFF"
                                    }
                                  },
                                  "shadow": {
                                    "stringVal": {
                                      "value": "sm"
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "column",
                                    "properties": {
                                      "cross_align": {
                                        "align": {
                                          "named": "start"
                                        }
                                      },
                                      "spacing": {
                                        "stringVal": {
                                          "value": "sm"
                                        }
                                      }
                                    },
                                    "children": [
                                      {
                                        "type": "text",
                                        "properties": {
                                          "content": {
                                            "stringVal": {
                                              "value": "Total Storage"
                                            }
                                          },
                                          "style": {
                                            "textStyle": {
                                              "styleName": "label_medium"
                                            }
                                          },
                                          "color": {
                                            "color": {
                                              "color": "secondary_text"
                                            }
                                          }
                                        },
                                        "editorId": "a58b6bcc-d6b5-4c8f-b715-10c48b7052ba"
                                      },
                                      {
                                        "type": "text",
                                        "properties": {
                                          "content": {
                                            "stringVal": {
                                              "value": "1.2 GB / 5 GB"
                                            }
                                          },
                                          "style": {
                                            "textStyle": {
                                              "styleName": "title_large"
                                            }
                                          },
                                          "font_weight": {
                                            "numberVal": {
                                              "value": 600
                                            }
                                          },
                                          "color": {
                                            "color": {
                                              "color": "primary_text"
                                            }
                                          }
                                        },
                                        "editorId": "72f42b14-43d6-4023-9170-5c3dd61768ad"
                                      },
                                      {
                                        "type": "progress",
                                        "properties": {
                                          "value": {
                                            "numberVal": {
                                              "value": 0.24
                                            }
                                          },
                                          "color": {
                                            "color": {
                                              "color": "primary_text"
                                            }
                                          },
                                          "bg_color": {
                                            "color": {
                                              "color": "#00000010"
                                            }
                                          },
                                          "thickness": {
                                            "numberVal": {
                                              "value": 4
                                            }
                                          }
                                        },
                                        "editorId": "9c71f6ef-9cd9-43b0-b150-3a8e8ab435dd"
                                      }
                                    ],
                                    "editorId": "08a78867-d04e-43f0-a10e-eb68127aaeed"
                                  }
                                ],
                                "editorId": "8f64e894-d19f-4583-859e-6e6744325476"
                              }
                            ],
                            "editorId": "f86f708b-c419-4a35-bc22-069c7ab3c699"
                          },
                          {
                            "type": "expanded",
                            "properties": {
                              "flex": {
                                "numberVal": {
                                  "value": 1
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "container",
                                "properties": {
                                  "bg": {
                                    "color": {
                                      "color": "#FFFFFF66"
                                    }
                                  },
                                  "backdrop_blur": {
                                    "numberVal": {
                                      "value": 10
                                    }
                                  },
                                  "radius": {
                                    "radius": {
                                      "topLeft": 0,
                                      "topRight": 0,
                                      "bottomLeft": 0,
                                      "bottomRight": 0,
                                      "token": "lg"
                                    }
                                  },
                                  "padding": {
                                    "edgeInsets": {
                                      "top": 0,
                                      "right": 0,
                                      "bottom": 0,
                                      "left": 0,
                                      "token": "lg"
                                    }
                                  },
                                  "border": {
                                    "border": {
                                      "width": 1,
                                      "color": "#FFFFFF"
                                    }
                                  },
                                  "shadow": {
                                    "stringVal": {
                                      "value": "sm"
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "column",
                                    "properties": {
                                      "cross_align": {
                                        "align": {
                                          "named": "start"
                                        }
                                      },
                                      "spacing": {
                                        "stringVal": {
                                          "value": "sm"
                                        }
                                      }
                                    },
                                    "children": [
                                      {
                                        "type": "text",
                                        "properties": {
                                          "content": {
                                            "stringVal": {
                                              "value": "Last Sync"
                                            }
                                          },
                                          "style": {
                                            "textStyle": {
                                              "styleName": "label_medium"
                                            }
                                          },
                                          "color": {
                                            "color": {
                                              "color": "secondary_text"
                                            }
                                          }
                                        },
                                        "editorId": "ec5903b8-7931-435a-b31f-318563bb244a"
                                      },
                                      {
                                        "type": "text",
                                        "properties": {
                                          "content": {
                                            "stringVal": {
                                              "value": "14 minutes ago"
                                            }
                                          },
                                          "style": {
                                            "textStyle": {
                                              "styleName": "title_large"
                                            }
                                          },
                                          "font_weight": {
                                            "numberVal": {
                                              "value": 600
                                            }
                                          },
                                          "color": {
                                            "color": {
                                              "color": "primary_text"
                                            }
                                          }
                                        },
                                        "editorId": "8a746332-23fe-4c1c-bc1a-bede717e0540"
                                      },
                                      {
                                        "type": "text",
                                        "properties": {
                                          "content": {
                                            "stringVal": {
                                              "value": "All systems operational"
                                            }
                                          },
                                          "style": {
                                            "textStyle": {
                                              "styleName": "label_small"
                                            }
                                          },
                                          "color": {
                                            "color": {
                                              "color": "success"
                                            }
                                          }
                                        },
                                        "editorId": "6be4f084-94d1-4cfc-8c5c-19f912ba314a"
                                      }
                                    ],
                                    "editorId": "ec06e289-3f03-40a2-8b71-a96fc21c855f"
                                  }
                                ],
                                "editorId": "7400cc05-e911-4867-80c2-0c3c37a35f4c"
                              }
                            ],
                            "editorId": "79d26001-442e-44aa-8866-4f30929a7938"
                          },
                          {
                            "type": "expanded",
                            "properties": {
                              "flex": {
                                "numberVal": {
                                  "value": 1
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "container",
                                "properties": {
                                  "bg": {
                                    "color": {
                                      "color": "#FFFFFF66"
                                    }
                                  },
                                  "backdrop_blur": {
                                    "numberVal": {
                                      "value": 10
                                    }
                                  },
                                  "radius": {
                                    "radius": {
                                      "topLeft": 0,
                                      "topRight": 0,
                                      "bottomLeft": 0,
                                      "bottomRight": 0,
                                      "token": "lg"
                                    }
                                  },
                                  "padding": {
                                    "edgeInsets": {
                                      "top": 0,
                                      "right": 0,
                                      "bottom": 0,
                                      "left": 0,
                                      "token": "lg"
                                    }
                                  },
                                  "border": {
                                    "border": {
                                      "width": 1,
                                      "color": "#FFFFFF"
                                    }
                                  },
                                  "shadow": {
                                    "stringVal": {
                                      "value": "sm"
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "column",
                                    "properties": {
                                      "cross_align": {
                                        "align": {
                                          "named": "start"
                                        }
                                      },
                                      "spacing": {
                                        "stringVal": {
                                          "value": "sm"
                                        }
                                      }
                                    },
                                    "children": [
                                      {
                                        "type": "text",
                                        "properties": {
                                          "content": {
                                            "stringVal": {
                                              "value": "Knowledge Index"
                                            }
                                          },
                                          "style": {
                                            "textStyle": {
                                              "styleName": "label_medium"
                                            }
                                          },
                                          "color": {
                                            "color": {
                                              "color": "secondary_text"
                                            }
                                          }
                                        },
                                        "editorId": "37a088bf-851e-45c3-8571-e8f8c37c1db8"
                                      },
                                      {
                                        "type": "text",
                                        "properties": {
                                          "content": {
                                            "stringVal": {
                                              "value": "842 Docs"
                                            }
                                          },
                                          "style": {
                                            "textStyle": {
                                              "styleName": "title_large"
                                            }
                                          },
                                          "font_weight": {
                                            "numberVal": {
                                              "value": 600
                                            }
                                          },
                                          "color": {
                                            "color": {
                                              "color": "primary_text"
                                            }
                                          }
                                        },
                                        "editorId": "97843c8b-03c4-4a15-b710-597c4a097fbc"
                                      },
                                      {
                                        "type": "text",
                                        "properties": {
                                          "content": {
                                            "stringVal": {
                                              "value": "+12 this week"
                                            }
                                          },
                                          "style": {
                                            "textStyle": {
                                              "styleName": "label_small"
                                            }
                                          },
                                          "color": {
                                            "color": {
                                              "color": "secondary_text"
                                            }
                                          }
                                        },
                                        "editorId": "cd2096ad-79a0-4749-81bb-7635ff624ee0"
                                      }
                                    ],
                                    "editorId": "e7450cdb-34f0-49f1-a293-418cbef0ede8"
                                  }
                                ],
                                "editorId": "69a23c40-06cb-4f7e-9511-e25be68227bd"
                              }
                            ],
                            "editorId": "b40aa5b3-970c-4799-938f-738a41a73292"
                          }
                        ],
                        "editorId": "096fa6d0-3c7e-43e4-bec2-570b2c2c5d5b"
                      },
                      {
                        "type": "column",
                        "properties": {
                          "cross_align": {
                            "align": {
                              "named": "start"
                            }
                          },
                          "spacing": {
                            "stringVal": {
                              "value": "md"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "text",
                            "properties": {
                              "content": {
                                "stringVal": {
                                  "value": "Pinned Documents"
                                }
                              },
                              "style": {
                                "textStyle": {
                                  "styleName": "title_small"
                                }
                              },
                              "font_weight": {
                                "numberVal": {
                                  "value": 600
                                }
                              },
                              "color": {
                                "color": {
                                  "color": "secondary_text"
                                }
                              }
                            },
                            "editorId": "67d0bf13-d816-4e3d-bb4c-a19b3524c20d"
                          },
                          {
                            "type": "row",
                            "properties": {
                              "spacing": {
                                "stringVal": {
                                  "value": "lg"
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "expanded",
                                "properties": {
                                  "flex": {
                                    "numberVal": {
                                      "value": 1
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "@doc_card",
                                    "properties": {
                                      "icon": {
                                        "stringVal": {
                                          "value": "description_rounded"
                                        }
                                      },
                                      "title": {
                                        "stringVal": {
                                          "value": "ISO-9001 Compliance"
                                        }
                                      },
                                      "meta": {
                                        "stringVal": {
                                          "value": "Updated 2d ago"
                                        }
                                      },
                                      "tag": {
                                        "stringVal": {
                                          "value": "Standards"
                                        }
                                      },
                                      "size": {
                                        "stringVal": {
                                          "value": "4.2 MB"
                                        }
                                      }
                                    },
                                    "editorId": "8dc6e91e-dc22-41c4-b73c-3b768763a472"
                                  }
                                ],
                                "editorId": "4ac903e9-e53a-411b-9576-92768e629d89"
                              },
                              {
                                "type": "expanded",
                                "properties": {
                                  "flex": {
                                    "numberVal": {
                                      "value": 1
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "@doc_card",
                                    "properties": {
                                      "icon": {
                                        "stringVal": {
                                          "value": "precision_manufacturing_rounded"
                                        }
                                      },
                                      "title": {
                                        "stringVal": {
                                          "value": "Assembly Line V3"
                                        }
                                      },
                                      "meta": {
                                        "stringVal": {
                                          "value": "Updated 5h ago"
                                        }
                                      },
                                      "tag": {
                                        "stringVal": {
                                          "value": "Manual"
                                        }
                                      },
                                      "size": {
                                        "stringVal": {
                                          "value": "12.8 MB"
                                        }
                                      }
                                    },
                                    "editorId": "790c8f79-effa-41b9-8e15-a63360cd735f"
                                  }
                                ],
                                "editorId": "eec81638-164c-4aae-8a72-64b7c121f901"
                              },
                              {
                                "type": "expanded",
                                "properties": {
                                  "flex": {
                                    "numberVal": {
                                      "value": 1
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "@doc_card",
                                    "properties": {
                                      "icon": {
                                        "stringVal": {
                                          "value": "inventory_2_rounded"
                                        }
                                      },
                                      "title": {
                                        "stringVal": {
                                          "value": "Material Safety Data"
                                        }
                                      },
                                      "meta": {
                                        "stringVal": {
                                          "value": "Updated 1w ago"
                                        }
                                      },
                                      "tag": {
                                        "stringVal": {
                                          "value": "Safety"
                                        }
                                      },
                                      "size": {
                                        "stringVal": {
                                          "value": "2.1 MB"
                                        }
                                      }
                                    },
                                    "editorId": "2ce6532f-c292-4a7a-9976-ecc54849ebff"
                                  }
                                ],
                                "editorId": "8b6a8cb9-1847-4192-9abf-ffe6d8651e0b"
                              },
                              {
                                "type": "expanded",
                                "properties": {
                                  "flex": {
                                    "numberVal": {
                                      "value": 1
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "@doc_card",
                                    "properties": {
                                      "icon": {
                                        "stringVal": {
                                          "value": "architecture_rounded"
                                        }
                                      },
                                      "title": {
                                        "stringVal": {
                                          "value": "Chassis Blueprint"
                                        }
                                      },
                                      "meta": {
                                        "stringVal": {
                                          "value": "Updated 1d ago"
                                        }
                                      },
                                      "tag": {
                                        "stringVal": {
                                          "value": "Design"
                                        }
                                      },
                                      "size": {
                                        "stringVal": {
                                          "value": "45.0 MB"
                                        }
                                      }
                                    },
                                    "editorId": "e82f6a79-0143-44aa-af7e-97cc303a0d6a"
                                  }
                                ],
                                "editorId": "ece62d40-3253-421b-ac7a-628bc48012c6"
                              }
                            ],
                            "editorId": "be1d9fc5-aae2-4533-a5ca-74f3ae389627"
                          }
                        ],
                        "editorId": "f5f0fcbd-b5c6-4b40-bc83-402ea422cb34"
                      },
                      {
                        "type": "container",
                        "properties": {
                          "bg": {
                            "color": {
                              "color": "#FFFFFF88"
                            }
                          },
                          "backdrop_blur": {
                            "numberVal": {
                              "value": 15
                            }
                          },
                          "radius": {
                            "radius": {
                              "topLeft": 0,
                              "topRight": 0,
                              "bottomLeft": 0,
                              "bottomRight": 0,
                              "token": "xl"
                            }
                          },
                          "border": {
                            "border": {
                              "width": 1,
                              "color": "#FFFFFF"
                            }
                          },
                          "shadow": {
                            "stringVal": {
                              "value": "sm"
                            }
                          },
                          "clip": {
                            "boolVal": {
                              "value": true
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "column",
                            "properties": {
                              "cross_align": {
                                "align": {
                                  "named": "stretch"
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "container",
                                "properties": {
                                  "bg": {
                                    "color": {
                                      "color": "#00000003"
                                    }
                                  },
                                  "padding": {
                                    "edgeInsets": {
                                      "top": 0,
                                      "right": 0,
                                      "bottom": 0,
                                      "left": 0,
                                      "topToken": "md",
                                      "rightToken": "lg",
                                      "bottomToken": "md",
                                      "leftToken": "lg"
                                    }
                                  },
                                  "border": {
                                    "borderSided": {
                                      "side": "bottom",
                                      "width": 1,
                                      "color": "#00000005"
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "row",
                                    "properties": {
                                      "spacing": {
                                        "stringVal": {
                                          "value": "lg"
                                        }
                                      }
                                    },
                                    "children": [
                                      {
                                        "type": "container",
                                        "properties": {
                                          "width": {
                                            "px": {
                                              "value": 32,
                                              "isInfinity": false
                                            }
                                          }
                                        },
                                        "editorId": "0e019d1a-ed58-4f36-b059-694604613b2a"
                                      },
                                      {
                                        "type": "expanded",
                                        "properties": {
                                          "flex": {
                                            "numberVal": {
                                              "value": 3
                                            }
                                          }
                                        },
                                        "children": [
                                          {
                                            "type": "text",
                                            "properties": {
                                              "content": {
                                                "stringVal": {
                                                  "value": "Name"
                                                }
                                              },
                                              "style": {
                                                "textStyle": {
                                                  "styleName": "label_small"
                                                }
                                              },
                                              "font_weight": {
                                                "numberVal": {
                                                  "value": 600
                                                }
                                              },
                                              "color": {
                                                "color": {
                                                  "color": "hint"
                                                }
                                              }
                                            },
                                            "editorId": "2edabff8-99ca-4be9-b440-3641f3d7cb68"
                                          }
                                        ],
                                        "editorId": "908fee26-4975-47ac-922a-ae681c820145"
                                      },
                                      {
                                        "type": "expanded",
                                        "properties": {
                                          "flex": {
                                            "numberVal": {
                                              "value": 2
                                            }
                                          }
                                        },
                                        "children": [
                                          {
                                            "type": "text",
                                            "properties": {
                                              "content": {
                                                "stringVal": {
                                                  "value": "Date Modified"
                                                }
                                              },
                                              "style": {
                                                "textStyle": {
                                                  "styleName": "label_small"
                                                }
                                              },
                                              "font_weight": {
                                                "numberVal": {
                                                  "value": 600
                                                }
                                              },
                                              "color": {
                                                "color": {
                                                  "color": "hint"
                                                }
                                              }
                                            },
                                            "editorId": "1484f074-e257-42ca-a11d-28a7b7e62a96"
                                          }
                                        ],
                                        "editorId": "ce505d1e-c4e4-40e3-8135-f64d6cb53804"
                                      },
                                      {
                                        "type": "expanded",
                                        "properties": {
                                          "flex": {
                                            "numberVal": {
                                              "value": 1
                                            }
                                          }
                                        },
                                        "children": [
                                          {
                                            "type": "text",
                                            "properties": {
                                              "content": {
                                                "stringVal": {
                                                  "value": "Size"
                                                }
                                              },
                                              "style": {
                                                "textStyle": {
                                                  "styleName": "label_small"
                                                }
                                              },
                                              "font_weight": {
                                                "numberVal": {
                                                  "value": 600
                                                }
                                              },
                                              "color": {
                                                "color": {
                                                  "color": "hint"
                                                }
                                              }
                                            },
                                            "editorId": "7f57fbe6-3503-47cd-a3ee-2530ebbdf35a"
                                          }
                                        ],
                                        "editorId": "4aa2b1e1-ce42-4035-845d-bcd1be25c5af"
                                      },
                                      {
                                        "type": "container",
                                        "properties": {
                                          "width": {
                                            "px": {
                                              "value": 80,
                                              "isInfinity": false
                                            }
                                          },
                                          "align_child": {
                                            "align": {
                                              "named": "center"
                                            }
                                          }
                                        },
                                        "children": [
                                          {
                                            "type": "text",
                                            "properties": {
                                              "content": {
                                                "stringVal": {
                                                  "value": "Status"
                                                }
                                              },
                                              "style": {
                                                "textStyle": {
                                                  "styleName": "label_small"
                                                }
                                              },
                                              "font_weight": {
                                                "numberVal": {
                                                  "value": 600
                                                }
                                              },
                                              "color": {
                                                "color": {
                                                  "color": "hint"
                                                }
                                              }
                                            },
                                            "editorId": "8cc56577-5538-4ae0-97a3-95522ac322d1"
                                          }
                                        ],
                                        "editorId": "c582a4cc-9c84-4776-97f0-305f46a84f76"
                                      }
                                    ],
                                    "editorId": "e1d9897f-4981-4c55-9bc1-78d49a54e455"
                                  }
                                ],
                                "editorId": "2c2a0b5e-8257-4fe1-bc91-85493e51f5fb"
                              },
                              {
                                "type": "@table_row",
                                "properties": {
                                  "icon": {
                                    "stringVal": {
                                      "value": "article_rounded"
                                    }
                                  },
                                  "name": {
                                    "stringVal": {
                                      "value": "Q4 Production Report.pdf"
                                    }
                                  },
                                  "type": {
                                    "stringVal": {
                                      "value": "PDF Document"
                                    }
                                  },
                                  "date": {
                                    "stringVal": {
                                      "value": "Oct 12, 2023"
                                    }
                                  },
                                  "size": {
                                    "stringVal": {
                                      "value": "1.4 MB"
                                    }
                                  },
                                  "status": {
                                    "stringVal": {
                                      "value": "Indexed"
                                    }
                                  }
                                },
                                "editorId": "dc11faed-ebde-4727-9c08-52cf460b3a74"
                              },
                              {
                                "type": "@table_row",
                                "properties": {
                                  "icon": {
                                    "stringVal": {
                                      "value": "table_view_rounded"
                                    }
                                  },
                                  "name": {
                                    "stringVal": {
                                      "value": "Component_List_Master.xlsx"
                                    }
                                  },
                                  "type": {
                                    "stringVal": {
                                      "value": "Spreadsheet"
                                    }
                                  },
                                  "date": {
                                    "stringVal": {
                                      "value": "Oct 10, 2023"
                                    }
                                  },
                                  "size": {
                                    "stringVal": {
                                      "value": "842 KB"
                                    }
                                  },
                                  "status": {
                                    "stringVal": {
                                      "value": "Indexed"
                                    }
                                  }
                                },
                                "editorId": "490e9a01-a8d4-4e47-952e-dc3da7eb15e9"
                              },
                              {
                                "type": "@table_row",
                                "properties": {
                                  "icon": {
                                    "stringVal": {
                                      "value": "image_rounded"
                                    }
                                  },
                                  "name": {
                                    "stringVal": {
                                      "value": "Factory_Floor_Plan_B1.dwg"
                                    }
                                  },
                                  "type": {
                                    "stringVal": {
                                      "value": "CAD Drawing"
                                    }
                                  },
                                  "date": {
                                    "stringVal": {
                                      "value": "Oct 08, 2023"
                                    }
                                  },
                                  "size": {
                                    "stringVal": {
                                      "value": "15.2 MB"
                                    }
                                  },
                                  "status": {
                                    "stringVal": {
                                      "value": "Processing"
                                    }
                                  }
                                },
                                "editorId": "9fdb70da-86b4-4976-80e4-3fe22d9194e3"
                              },
                              {
                                "type": "@table_row",
                                "properties": {
                                  "icon": {
                                    "stringVal": {
                                      "value": "description_rounded"
                                    }
                                  },
                                  "name": {
                                    "stringVal": {
                                      "value": "Operator_Training_Manual.pdf"
                                    }
                                  },
                                  "type": {
                                    "stringVal": {
                                      "value": "PDF Document"
                                    }
                                  },
                                  "date": {
                                    "stringVal": {
                                      "value": "Sep 28, 2023"
                                    }
                                  },
                                  "size": {
                                    "stringVal": {
                                      "value": "8.5 MB"
                                    }
                                  },
                                  "status": {
                                    "stringVal": {
                                      "value": "Indexed"
                                    }
                                  }
                                },
                                "editorId": "1066b005-15f5-4af6-8cbc-00d80a48c7c9"
                              },
                              {
                                "type": "@table_row",
                                "properties": {
                                  "icon": {
                                    "stringVal": {
                                      "value": "settings_suggest_rounded"
                                    }
                                  },
                                  "name": {
                                    "stringVal": {
                                      "value": "Calibration_Log_2023.csv"
                                    }
                                  },
                                  "type": {
                                    "stringVal": {
                                      "value": "Data File"
                                    }
                                  },
                                  "date": {
                                    "stringVal": {
                                      "value": "Sep 25, 2023"
                                    }
                                  },
                                  "size": {
                                    "stringVal": {
                                      "value": "124 KB"
                                    }
                                  },
                                  "status": {
                                    "stringVal": {
                                      "value": "Indexed"
                                    }
                                  }
                                },
                                "editorId": "3daf692a-c95e-4d5a-a50f-4068e1daba6e"
                              },
                              {
                                "type": "@table_row",
                                "properties": {
                                  "icon": {
                                    "stringVal": {
                                      "value": "picture_as_pdf_rounded"
                                    }
                                  },
                                  "name": {
                                    "stringVal": {
                                      "value": "Vendor_Agreement_Final.pdf"
                                    }
                                  },
                                  "type": {
                                    "stringVal": {
                                      "value": "PDF Document"
                                    }
                                  },
                                  "date": {
                                    "stringVal": {
                                      "value": "Sep 20, 2023"
                                    }
                                  },
                                  "size": {
                                    "stringVal": {
                                      "value": "2.2 MB"
                                    }
                                  },
                                  "status": {
                                    "stringVal": {
                                      "value": "Indexed"
                                    }
                                  }
                                },
                                "editorId": "0d26cfd8-6a23-4912-b311-1d26a7238f7c"
                              },
                              {
                                "type": "container",
                                "properties": {
                                  "padding": {
                                    "edgeInsets": {
                                      "top": 0,
                                      "right": 0,
                                      "bottom": 0,
                                      "left": 0,
                                      "topToken": "md",
                                      "rightToken": "lg",
                                      "bottomToken": "md",
                                      "leftToken": "lg"
                                    }
                                  },
                                  "align_child": {
                                    "align": {
                                      "named": "center"
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "row",
                                    "properties": {
                                      "align": {
                                        "align": {
                                          "named": "center"
                                        }
                                      },
                                      "spacing": {
                                        "stringVal": {
                                          "value": "md"
                                        }
                                      }
                                    },
                                    "children": [
                                      {
                                        "type": "iconbutton",
                                        "properties": {
                                          "name": {
                                            "icon": {
                                              "name": "chevron_left_rounded"
                                            }
                                          },
                                          "color": {
                                            "color": {
                                              "color": "hint"
                                            }
                                          },
                                          "size": {
                                            "numberVal": {
                                              "value": 20
                                            }
                                          }
                                        },
                                        "editorId": "13cb303b-698e-4f1d-b1e6-61b3b5557115"
                                      },
                                      {
                                        "type": "text",
                                        "properties": {
                                          "content": {
                                            "stringVal": {
                                              "value": "Page 1 of 12"
                                            }
                                          },
                                          "style": {
                                            "textStyle": {
                                              "styleName": "label_medium"
                                            }
                                          },
                                          "color": {
                                            "color": {
                                              "color": "secondary_text"
                                            }
                                          }
                                        },
                                        "editorId": "51db55f9-25e2-49f7-8a7f-05f16fe4c2d3"
                                      },
                                      {
                                        "type": "iconbutton",
                                        "properties": {
                                          "name": {
                                            "icon": {
                                              "name": "chevron_right_rounded"
                                            }
                                          },
                                          "color": {
                                            "color": {
                                              "color": "primary_text"
                                            }
                                          },
                                          "size": {
                                            "numberVal": {
                                              "value": 20
                                            }
                                          }
                                        },
                                        "editorId": "2529e4b0-61f8-4f6e-bfa5-42f0f8869163"
                                      }
                                    ],
                                    "editorId": "a2719473-c92d-4cbf-864d-52bf4ccef98e"
                                  }
                                ],
                                "editorId": "3829c784-e199-40b5-8945-6a0c06dbe3bc"
                              }
                            ],
                            "editorId": "f231e7c5-81f0-4abb-85f8-524e641d3114"
                          }
                        ],
                        "editorId": "1b8638b5-ed93-4167-b926-50b8e213c8b5"
                      }
                    ],
                    "editorId": "ba9c7d7c-aa7c-44c4-8594-9e89ea472693"
                  }
                ],
                "editorId": "8f7fc633-273e-484d-83ba-d94aaf5c398e"
              }
            ],
            "editorId": "d8672dd9-13cb-4b2f-8fda-f8cadd68d99a"
          }
        ],
        "editorId": "1e7e3026-8b06-44c7-82cf-1bcf0ef9bfca"
      }
    ],
    "editorId": "136b497d-add5-4950-8583-bc58ff832f40"
  },
  "components": [
    {
      "name": "sidebar_item",
      "root": {
        "type": "container",
        "properties": {
          "padding": {
            "edgeInsets": {
              "top": 0,
              "right": 0,
              "bottom": 0,
              "left": 0,
              "topToken": "md",
              "rightToken": "lg",
              "bottomToken": "md",
              "leftToken": "lg"
            }
          },
          "radius": {
            "radius": {
              "topLeft": 0,
              "topRight": 0,
              "bottomLeft": 0,
              "bottomRight": 0,
              "token": "md"
            }
          },
          "bg": {
            "conditional": {
              "conditionSlot": "active",
              "trueValue": {
                "color": {
                  "color": "#00000008"
                }
              },
              "falseValue": {
                "color": {
                  "color": "transparent"
                }
              }
            }
          }
        },
        "children": [
          {
            "type": "row",
            "properties": {
              "spacing": {
                "stringVal": {
                  "value": "md"
                }
              }
            },
            "children": [
              {
                "type": "icon",
                "properties": {
                  "name": {
                    "slot": {
                      "name": "icon"
                    }
                  },
                  "size": {
                    "numberVal": {
                      "value": 20
                    }
                  },
                  "color": {
                    "conditional": {
                      "conditionSlot": "active",
                      "trueValue": {
                        "color": {
                          "color": "primary_text"
                        }
                      },
                      "falseValue": {
                        "color": {
                          "color": "secondary_text"
                        }
                      }
                    }
                  }
                },
                "editorId": "1e518c22-a2df-489d-83a2-711a6d314bd7"
              },
              {
                "type": "text",
                "properties": {
                  "content": {
                    "slot": {
                      "name": "label"
                    }
                  },
                  "style": {
                    "textStyle": {
                      "styleName": "body_medium"
                    }
                  },
                  "color": {
                    "conditional": {
                      "conditionSlot": "active",
                      "trueValue": {
                        "color": {
                          "color": "primary_text"
                        }
                      },
                      "falseValue": {
                        "color": {
                          "color": "secondary_text"
                        }
                      }
                    }
                  },
                  "font_weight": {
                    "conditional": {
                      "conditionSlot": "active",
                      "trueValue": {
                        "numberVal": {
                          "value": 600
                        }
                      },
                      "falseValue": {
                        "numberVal": {
                          "value": 400
                        }
                      }
                    }
                  }
                },
                "editorId": "636380ed-2635-4165-9e18-3bc8ee5023ae"
              }
            ],
            "editorId": "e13ef963-2da9-442a-9114-840587d64d21"
          }
        ],
        "editorId": "abacbf2c-3e0e-4480-931c-cf2bc3e061aa"
      }
    },
    {
      "name": "doc_card",
      "root": {
        "type": "container",
        "properties": {
          "bg": {
            "color": {
              "color": "surface"
            }
          },
          "radius": {
            "radius": {
              "topLeft": 0,
              "topRight": 0,
              "bottomLeft": 0,
              "bottomRight": 0,
              "token": "lg"
            }
          },
          "padding": {
            "edgeInsets": {
              "top": 0,
              "right": 0,
              "bottom": 0,
              "left": 0,
              "token": "lg"
            }
          },
          "border": {
            "border": {
              "width": 1,
              "color": "#00000005"
            }
          },
          "shadow": {
            "stringVal": {
              "value": "sm"
            }
          }
        },
        "children": [
          {
            "type": "column",
            "properties": {
              "cross_align": {
                "align": {
                  "named": "start"
                }
              },
              "spacing": {
                "stringVal": {
                  "value": "md"
                }
              }
            },
            "children": [
              {
                "type": "row",
                "properties": {
                  "align": {
                    "align": {
                      "named": "space_between"
                    }
                  }
                },
                "children": [
                  {
                    "type": "container",
                    "properties": {
                      "width": {
                        "px": {
                          "value": 40,
                          "isInfinity": false
                        }
                      },
                      "height": {
                        "px": {
                          "value": 40,
                          "isInfinity": false
                        }
                      },
                      "radius": {
                        "radius": {
                          "topLeft": 0,
                          "topRight": 0,
                          "bottomLeft": 0,
                          "bottomRight": 0,
                          "token": "md"
                        }
                      },
                      "bg": {
                        "color": {
                          "color": "#f0f2f5"
                        }
                      },
                      "align_child": {
                        "align": {
                          "named": "center"
                        }
                      }
                    },
                    "children": [
                      {
                        "type": "icon",
                        "properties": {
                          "name": {
                            "slot": {
                              "name": "icon"
                            }
                          },
                          "color": {
                            "color": {
                              "color": "secondary_text"
                            }
                          },
                          "size": {
                            "numberVal": {
                              "value": 20
                            }
                          }
                        },
                        "editorId": "595377a0-b8d4-495f-a1e6-7fc5b4cfb08d"
                      }
                    ],
                    "editorId": "570f5b16-3a9c-4722-9a95-e18759d3a451"
                  },
                  {
                    "type": "iconbutton",
                    "properties": {
                      "name": {
                        "icon": {
                          "name": "more_vert_rounded"
                        }
                      },
                      "color": {
                        "color": {
                          "color": "hint"
                        }
                      },
                      "size": {
                        "numberVal": {
                          "value": 18
                        }
                      }
                    },
                    "editorId": "49b9a815-cbcf-4ff5-aa93-28a59a8f49e7"
                  }
                ],
                "editorId": "b3bcd291-8153-40f1-81ba-ecc277dac488"
              },
              {
                "type": "column",
                "properties": {
                  "spacing": {
                    "stringVal": {
                      "value": "xs"
                    }
                  },
                  "cross_align": {
                    "align": {
                      "named": "start"
                    }
                  }
                },
                "children": [
                  {
                    "type": "text",
                    "properties": {
                      "content": {
                        "slot": {
                          "name": "title"
                        }
                      },
                      "style": {
                        "textStyle": {
                          "styleName": "title_medium"
                        }
                      },
                      "font_weight": {
                        "numberVal": {
                          "value": 600
                        }
                      },
                      "color": {
                        "color": {
                          "color": "primary_text"
                        }
                      },
                      "max_lines": {
                        "numberVal": {
                          "value": 1
                        }
                      },
                      "overflow": {
                        "stringVal": {
                          "value": "ellipsis"
                        }
                      }
                    },
                    "editorId": "a85e7ba5-1150-45b8-98a2-0834d9bab3c8"
                  },
                  {
                    "type": "text",
                    "properties": {
                      "content": {
                        "slot": {
                          "name": "meta"
                        }
                      },
                      "style": {
                        "textStyle": {
                          "styleName": "label_small"
                        }
                      },
                      "color": {
                        "color": {
                          "color": "secondary_text"
                        }
                      }
                    },
                    "editorId": "f4676693-fda3-427f-b6af-6be706746968"
                  }
                ],
                "editorId": "68e6baff-b434-4389-8b5f-6a42565be329"
              },
              {
                "type": "divider",
                "properties": {
                  "color": {
                    "color": {
                      "color": "#00000005"
                    }
                  }
                },
                "editorId": "eebeab04-def3-4e17-a399-0fb44e495dd2"
              },
              {
                "type": "row",
                "properties": {
                  "align": {
                    "align": {
                      "named": "space_between"
                    }
                  }
                },
                "children": [
                  {
                    "type": "chip",
                    "properties": {
                      "content": {
                        "slot": {
                          "name": "tag"
                        }
                      },
                      "variant": {
                        "stringVal": {
                          "value": "filter"
                        }
                      },
                      "size": {
                        "stringVal": {
                          "value": "small"
                        }
                      },
                      "bg": {
                        "color": {
                          "color": "#f8f9fa"
                        }
                      },
                      "color": {
                        "color": {
                          "color": "secondary_text"
                        }
                      }
                    },
                    "editorId": "9c569a84-a84a-4f1b-9f1e-37a47fa2ef22"
                  },
                  {
                    "type": "text",
                    "properties": {
                      "content": {
                        "slot": {
                          "name": "size"
                        }
                      },
                      "style": {
                        "textStyle": {
                          "styleName": "label_small"
                        }
                      },
                      "color": {
                        "color": {
                          "color": "hint"
                        }
                      }
                    },
                    "editorId": "c99985af-16df-4d6b-80e0-b0bd81352345"
                  }
                ],
                "editorId": "f103f148-118d-46e1-a61d-537d0b6a6116"
              }
            ],
            "editorId": "bc5ee88c-d4bd-4b70-9e5c-d0cb24afe599"
          }
        ],
        "editorId": "357f556b-0ef3-499a-ab6a-6dd84e27df77"
      }
    },
    {
      "name": "table_row",
      "root": {
        "type": "container",
        "properties": {
          "padding": {
            "edgeInsets": {
              "top": 0,
              "right": 0,
              "bottom": 0,
              "left": 0,
              "topToken": "md",
              "rightToken": "lg",
              "bottomToken": "md",
              "leftToken": "lg"
            }
          },
          "border": {
            "borderSided": {
              "side": "bottom",
              "width": 1,
              "color": "#00000005"
            }
          }
        },
        "children": [
          {
            "type": "row",
            "properties": {
              "spacing": {
                "stringVal": {
                  "value": "lg"
                }
              }
            },
            "children": [
              {
                "type": "container",
                "properties": {
                  "width": {
                    "px": {
                      "value": 32,
                      "isInfinity": false
                    }
                  },
                  "height": {
                    "px": {
                      "value": 32,
                      "isInfinity": false
                    }
                  },
                  "radius": {
                    "radius": {
                      "topLeft": 0,
                      "topRight": 0,
                      "bottomLeft": 0,
                      "bottomRight": 0,
                      "token": "sm"
                    }
                  },
                  "bg": {
                    "color": {
                      "color": "#f0f2f5"
                    }
                  },
                  "align_child": {
                    "align": {
                      "named": "center"
                    }
                  }
                },
                "children": [
                  {
                    "type": "icon",
                    "properties": {
                      "name": {
                        "slot": {
                          "name": "icon"
                        }
                      },
                      "size": {
                        "numberVal": {
                          "value": 16
                        }
                      },
                      "color": {
                        "color": {
                          "color": "secondary_text"
                        }
                      }
                    },
                    "editorId": "7fac7332-fa39-4918-9ff0-3c888decfc39"
                  }
                ],
                "editorId": "68208e04-3c10-4891-9fb8-eebb36dfae0c"
              },
              {
                "type": "expanded",
                "properties": {
                  "flex": {
                    "numberVal": {
                      "value": 3
                    }
                  }
                },
                "children": [
                  {
                    "type": "column",
                    "properties": {
                      "cross_align": {
                        "align": {
                          "named": "start"
                        }
                      },
                      "spacing": {
                        "numberVal": {
                          "value": 2
                        }
                      }
                    },
                    "children": [
                      {
                        "type": "text",
                        "properties": {
                          "content": {
                            "slot": {
                              "name": "name"
                            }
                          },
                          "style": {
                            "textStyle": {
                              "styleName": "body_medium"
                            }
                          },
                          "font_weight": {
                            "numberVal": {
                              "value": 500
                            }
                          },
                          "color": {
                            "color": {
                              "color": "primary_text"
                            }
                          },
                          "max_lines": {
                            "numberVal": {
                              "value": 1
                            }
                          },
                          "overflow": {
                            "stringVal": {
                              "value": "ellipsis"
                            }
                          }
                        },
                        "editorId": "24331800-a268-4ec0-8eb4-ae799f70880f"
                      },
                      {
                        "type": "text",
                        "properties": {
                          "content": {
                            "slot": {
                              "name": "type"
                            }
                          },
                          "style": {
                            "textStyle": {
                              "styleName": "label_small"
                            }
                          },
                          "color": {
                            "color": {
                              "color": "hint"
                            }
                          }
                        },
                        "editorId": "9c8058ee-d3bb-438c-af2d-abcaad7f3cbb"
                      }
                    ],
                    "editorId": "b71f94e1-9262-403f-8dba-908e99d0efeb"
                  }
                ],
                "editorId": "cefa233b-8b4a-42ad-ab98-069aa44902a8"
              },
              {
                "type": "expanded",
                "properties": {
                  "flex": {
                    "numberVal": {
                      "value": 2
                    }
                  }
                },
                "children": [
                  {
                    "type": "text",
                    "properties": {
                      "content": {
                        "slot": {
                          "name": "date"
                        }
                      },
                      "style": {
                        "textStyle": {
                          "styleName": "body_small"
                        }
                      },
                      "color": {
                        "color": {
                          "color": "secondary_text"
                        }
                      }
                    },
                    "editorId": "70a4c7ee-e4f5-4675-be97-f202b7aec0f4"
                  }
                ],
                "editorId": "6e6a6cf3-c6df-4922-8ac2-409ca2ae093e"
              },
              {
                "type": "expanded",
                "properties": {
                  "flex": {
                    "numberVal": {
                      "value": 1
                    }
                  }
                },
                "children": [
                  {
                    "type": "text",
                    "properties": {
                      "content": {
                        "slot": {
                          "name": "size"
                        }
                      },
                      "style": {
                        "textStyle": {
                          "styleName": "body_small"
                        }
                      },
                      "color": {
                        "color": {
                          "color": "secondary_text"
                        }
                      }
                    },
                    "editorId": "86ddc841-cba7-46aa-98a6-ab8509db091b"
                  }
                ],
                "editorId": "32469e74-2af8-4557-b2e8-d7a252682393"
              },
              {
                "type": "container",
                "properties": {
                  "width": {
                    "px": {
                      "value": 80,
                      "isInfinity": false
                    }
                  },
                  "align_child": {
                    "align": {
                      "named": "center"
                    }
                  }
                },
                "children": [
                  {
                    "type": "chip",
                    "properties": {
                      "content": {
                        "slot": {
                          "name": "status"
                        }
                      },
                      "variant": {
                        "stringVal": {
                          "value": "action"
                        }
                      },
                      "bg": {
                        "color": {
                          "color": "#f1f5f9"
                        }
                      },
                      "color": {
                        "color": {
                          "color": "secondary_text"
                        }
                      },
                      "radius": {
                        "radius": {
                          "topLeft": 0,
                          "topRight": 0,
                          "bottomLeft": 0,
                          "bottomRight": 0,
                          "token": "sm"
                        }
                      }
                    },
                    "editorId": "5ee16a30-7fcb-4ddb-adac-8390d0697d00"
                  }
                ],
                "editorId": "0f214f57-2f7e-4d70-be48-30f3cd47945a"
              }
            ],
            "editorId": "09277605-9e62-43e1-996a-28cf2f46572b"
          }
        ],
        "editorId": "29526509-23bb-4932-b70e-b23eeb4fa3a0"
      }
    }
  ]
}
```

### 6. Agent Configuration

- Frame ID: `d77aac63-e301-40b3-8062-beaea7e45719`
- Original page prompt: "A detail view to set up and fine-tune specific manufacturing agents using a single input style and dark CTA buttons."
- Follow-up prompts: _None_

#### DslDocument (JSON)

```json
{
  "root": {
    "type": "scaffold",
    "properties": {
      "bg": {
        "color": {
          "color": "#F2F4F7"
        }
      },
      "safe_area": {
        "boolVal": {
          "value": true
        }
      }
    },
    "children": [
      {
        "type": "stack",
        "children": [
          {
            "type": "container",
            "properties": {
              "width": {
                "px": {
                  "value": "Infinity",
                  "isInfinity": true
                }
              },
              "height": {
                "px": {
                  "value": "Infinity",
                  "isInfinity": true
                }
              }
            },
            "children": [
              {
                "type": "stack",
                "children": [
                  {
                    "type": "container",
                    "properties": {
                      "align": {
                        "align": {
                          "positional": {
                            "x": -1,
                            "y": -1
                          }
                        }
                      },
                      "width": {
                        "px": {
                          "value": 600,
                          "isInfinity": false
                        }
                      },
                      "height": {
                        "px": {
                          "value": 600,
                          "isInfinity": false
                        }
                      },
                      "gradient": {
                        "gradient": {
                          "type": "GRADIENT_TYPE_RADIAL",
                          "direction": "center",
                          "stops": [
                            {
                              "color": "#DDE4ED"
                            },
                            {
                              "color": "#F2F4F700"
                            }
                          ]
                        }
                      }
                    },
                    "editorId": "c87ebdda-0dd7-48dc-bed8-7c6ca0640424"
                  },
                  {
                    "type": "container",
                    "properties": {
                      "align": {
                        "align": {
                          "positional": {
                            "x": 1,
                            "y": 1
                          }
                        }
                      },
                      "width": {
                        "px": {
                          "value": 800,
                          "isInfinity": false
                        }
                      },
                      "height": {
                        "px": {
                          "value": 800,
                          "isInfinity": false
                        }
                      },
                      "gradient": {
                        "gradient": {
                          "type": "GRADIENT_TYPE_RADIAL",
                          "direction": "center",
                          "stops": [
                            {
                              "color": "#E5E0D8"
                            },
                            {
                              "color": "#F2F4F700"
                            }
                          ]
                        }
                      }
                    },
                    "editorId": "eb49dea3-ae3e-46ca-b23c-c07ebf892fee"
                  }
                ],
                "editorId": "1be4e422-3884-46ae-82c1-4797798d0647"
              }
            ],
            "editorId": "6b243466-291d-43bc-bda7-7f0f2adbdb47"
          },
          {
            "type": "row",
            "properties": {
              "cross_align": {
                "align": {
                  "named": "stretch"
                }
              }
            },
            "children": [
              {
                "type": "container",
                "properties": {
                  "width": {
                    "px": {
                      "value": 260,
                      "isInfinity": false
                    }
                  },
                  "bg": {
                    "color": {
                      "color": "#FFFFFF80"
                    }
                  },
                  "backdrop_blur": {
                    "numberVal": {
                      "value": 20
                    }
                  },
                  "border": {
                    "borderSided": {
                      "side": "right",
                      "width": 1,
                      "color": "#00000008"
                    }
                  },
                  "padding": {
                    "edgeInsets": {
                      "top": 0,
                      "right": 0,
                      "bottom": 0,
                      "left": 0,
                      "token": "lg"
                    }
                  }
                },
                "children": [
                  {
                    "type": "column",
                    "properties": {
                      "cross_align": {
                        "align": {
                          "named": "stretch"
                        }
                      }
                    },
                    "children": [
                      {
                        "type": "row",
                        "properties": {
                          "spacing": {
                            "stringVal": {
                              "value": "md"
                            }
                          },
                          "padding": {
                            "edgeInsets": {
                              "top": 0,
                              "right": 0,
                              "bottom": 0,
                              "left": 0,
                              "bottomToken": "xl"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "container",
                            "properties": {
                              "width": {
                                "px": {
                                  "value": 32,
                                  "isInfinity": false
                                }
                              },
                              "height": {
                                "px": {
                                  "value": 32,
                                  "isInfinity": false
                                }
                              },
                              "bg": {
                                "color": {
                                  "color": "#1A1A1A"
                                }
                              },
                              "radius": {
                                "radius": {
                                  "topLeft": 0,
                                  "topRight": 0,
                                  "bottomLeft": 0,
                                  "bottomRight": 0,
                                  "token": "md"
                                }
                              },
                              "align_child": {
                                "align": {
                                  "named": "center"
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "icon",
                                "properties": {
                                  "name": {
                                    "icon": {
                                      "name": "memory_rounded"
                                    }
                                  },
                                  "color": {
                                    "color": {
                                      "color": "#FFFFFF"
                                    }
                                  },
                                  "size": {
                                    "numberVal": {
                                      "value": 18
                                    }
                                  }
                                },
                                "editorId": "19f0b4d4-441a-48bb-93be-e842c63fa36a"
                              }
                            ],
                            "editorId": "765a0961-76e0-4e27-9307-e96d65b8474f"
                          },
                          {
                            "type": "text",
                            "properties": {
                              "content": {
                                "stringVal": {
                                  "value": "FORGE"
                                }
                              },
                              "style": {
                                "textStyle": {
                                  "styleName": "title_medium"
                                }
                              },
                              "font_weight": {
                                "numberVal": {
                                  "value": 800
                                }
                              },
                              "color": {
                                "color": {
                                  "color": "primary_text"
                                }
                              }
                            },
                            "editorId": "6f308b20-d9c4-481f-92f7-c86c825806ec"
                          }
                        ],
                        "editorId": "4aaa5253-2cf2-4913-beb8-b235cf97b7af"
                      },
                      {
                        "type": "column",
                        "properties": {
                          "spacing": {
                            "stringVal": {
                              "value": "xs"
                            }
                          },
                          "expanded": {
                            "expanded": {
                              "enabled": true,
                              "flex": 1
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "@nav_item",
                            "properties": {
                              "icon": {
                                "stringVal": {
                                  "value": "insights_rounded"
                                }
                              },
                              "label": {
                                "stringVal": {
                                  "value": "Insights"
                                }
                              },
                              "active": {
                                "boolVal": {
                                  "value": false
                                }
                              }
                            },
                            "editorId": "78ac30bf-0710-4f47-b53c-5b0e5ff03d51"
                          },
                          {
                            "type": "@nav_item",
                            "properties": {
                              "icon": {
                                "stringVal": {
                                  "value": "request_quote_rounded"
                                }
                              },
                              "label": {
                                "stringVal": {
                                  "value": "Quoting"
                                }
                              },
                              "active": {
                                "boolVal": {
                                  "value": false
                                }
                              }
                            },
                            "editorId": "32b001b9-fe19-46e7-a9ce-89c091a7c578"
                          },
                          {
                            "type": "@nav_item",
                            "properties": {
                              "icon": {
                                "stringVal": {
                                  "value": "auto_awesome_rounded"
                                }
                              },
                              "label": {
                                "stringVal": {
                                  "value": "Knowledge Base"
                                }
                              },
                              "active": {
                                "boolVal": {
                                  "value": false
                                }
                              }
                            },
                            "editorId": "e3f42209-577b-4fe3-b9d6-38cc5023b01a"
                          },
                          {
                            "type": "@nav_item",
                            "properties": {
                              "icon": {
                                "stringVal": {
                                  "value": "smart_toy_rounded"
                                }
                              },
                              "label": {
                                "stringVal": {
                                  "value": "Agents"
                                }
                              },
                              "active": {
                                "boolVal": {
                                  "value": true
                                }
                              }
                            },
                            "editorId": "e501b44e-7e25-49e1-8126-56f4c84cb343"
                          }
                        ],
                        "editorId": "9b975a2c-0e24-41ff-98b8-27edf6c5a295"
                      },
                      {
                        "type": "container",
                        "properties": {
                          "padding": {
                            "edgeInsets": {
                              "top": 0,
                              "right": 0,
                              "bottom": 0,
                              "left": 0,
                              "token": "md"
                            }
                          },
                          "bg": {
                            "color": {
                              "color": "#00000005"
                            }
                          },
                          "radius": {
                            "radius": {
                              "topLeft": 0,
                              "topRight": 0,
                              "bottomLeft": 0,
                              "bottomRight": 0,
                              "token": "lg"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "row",
                            "properties": {
                              "spacing": {
                                "stringVal": {
                                  "value": "md"
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "avatar",
                                "properties": {
                                  "text": {
                                    "stringVal": {
                                      "value": "JD"
                                    }
                                  },
                                  "bg": {
                                    "color": {
                                      "color": "#1A1A1A"
                                    }
                                  },
                                  "color": {
                                    "color": {
                                      "color": "#FFFFFF"
                                    }
                                  },
                                  "size": {
                                    "numberVal": {
                                      "value": 36
                                    }
                                  }
                                },
                                "editorId": "587f87b4-5063-40b3-99fb-ebc90e5558fe"
                              },
                              {
                                "type": "column",
                                "properties": {
                                  "cross_align": {
                                    "align": {
                                      "named": "start"
                                    }
                                  },
                                  "expanded": {
                                    "expanded": {
                                      "enabled": true,
                                      "flex": 1
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "properties": {
                                      "content": {
                                        "stringVal": {
                                          "value": "John Doe"
                                        }
                                      },
                                      "style": {
                                        "textStyle": {
                                          "styleName": "body_small"
                                        }
                                      },
                                      "font_weight": {
                                        "numberVal": {
                                          "value": 600
                                        }
                                      },
                                      "color": {
                                        "color": {
                                          "color": "primary_text"
                                        }
                                      }
                                    },
                                    "editorId": "7c93b7d7-d3b8-4b7b-b882-57abdd7ad25e"
                                  },
                                  {
                                    "type": "text",
                                    "properties": {
                                      "content": {
                                        "stringVal": {
                                          "value": "Admin Access"
                                        }
                                      },
                                      "style": {
                                        "textStyle": {
                                          "styleName": "label_small"
                                        }
                                      },
                                      "color": {
                                        "color": {
                                          "color": "secondary_text"
                                        }
                                      }
                                    },
                                    "editorId": "55fcff2d-f3e3-469b-ab38-4464359662a9"
                                  }
                                ],
                                "editorId": "6cab102a-d35d-483f-9766-1644bcd164c2"
                              }
                            ],
                            "editorId": "a2926d72-93aa-4534-85eb-8b6a19df4d6b"
                          }
                        ],
                        "editorId": "b37cf52b-ba75-433a-b00e-ddea3f88886e"
                      }
                    ],
                    "editorId": "09ef618f-9fae-4f51-a375-0c0f60741edb"
                  }
                ],
                "editorId": "ca207890-b9c4-4ed3-81cb-4207803bee73"
              },
              {
                "type": "expanded",
                "children": [
                  {
                    "type": "column",
                    "properties": {
                      "scroll": {
                        "boolVal": {
                          "value": true
                        }
                      },
                      "padding": {
                        "edgeInsets": {
                          "top": 0,
                          "right": 0,
                          "bottom": 0,
                          "left": 0,
                          "token": "xl"
                        }
                      },
                      "spacing": {
                        "stringVal": {
                          "value": "xl"
                        }
                      },
                      "cross_align": {
                        "align": {
                          "named": "stretch"
                        }
                      }
                    },
                    "children": [
                      {
                        "type": "row",
                        "properties": {
                          "align": {
                            "align": {
                              "named": "space_between"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "column",
                            "properties": {
                              "cross_align": {
                                "align": {
                                  "named": "start"
                                }
                              },
                              "spacing": {
                                "stringVal": {
                                  "value": "xs"
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "row",
                                "properties": {
                                  "spacing": {
                                    "stringVal": {
                                      "value": "sm"
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "properties": {
                                      "content": {
                                        "stringVal": {
                                          "value": "Agents"
                                        }
                                      },
                                      "style": {
                                        "textStyle": {
                                          "styleName": "body_medium"
                                        }
                                      },
                                      "color": {
                                        "color": {
                                          "color": "secondary_text"
                                        }
                                      }
                                    },
                                    "editorId": "b2fe54d5-0ac2-4bac-bc89-78d2d5ac4d89"
                                  },
                                  {
                                    "type": "icon",
                                    "properties": {
                                      "name": {
                                        "icon": {
                                          "name": "chevron_right_rounded"
                                        }
                                      },
                                      "size": {
                                        "numberVal": {
                                          "value": 16
                                        }
                                      },
                                      "color": {
                                        "color": {
                                          "color": "secondary_text"
                                        }
                                      }
                                    },
                                    "editorId": "c5af275a-dbb7-47c4-a292-3c4e5c52d3db"
                                  },
                                  {
                                    "type": "text",
                                    "properties": {
                                      "content": {
                                        "stringVal": {
                                          "value": "Quality Inspector AI"
                                        }
                                      },
                                      "style": {
                                        "textStyle": {
                                          "styleName": "body_medium"
                                        }
                                      },
                                      "color": {
                                        "color": {
                                          "color": "primary_text"
                                        }
                                      },
                                      "font_weight": {
                                        "numberVal": {
                                          "value": 600
                                        }
                                      }
                                    },
                                    "editorId": "35e4d2fc-3fbb-4357-a29d-cb368ba2d384"
                                  }
                                ],
                                "editorId": "aa5b904f-ff13-4b6c-8766-ea3ddfca4cc0"
                              },
                              {
                                "type": "text",
                                "properties": {
                                  "content": {
                                    "stringVal": {
                                      "value": "Agent Configuration"
                                    }
                                  },
                                  "style": {
                                    "textStyle": {
                                      "styleName": "headline_medium"
                                    }
                                  },
                                  "font_weight": {
                                    "numberVal": {
                                      "value": 700
                                    }
                                  },
                                  "color": {
                                    "color": {
                                      "color": "primary_text"
                                    }
                                  }
                                },
                                "editorId": "97e3c77e-50ff-42e8-a9a6-36ca41b29c7c"
                              }
                            ],
                            "editorId": "1d0686d7-e09f-4239-b18d-79b8876d98b0"
                          },
                          {
                            "type": "row",
                            "properties": {
                              "spacing": {
                                "stringVal": {
                                  "value": "md"
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "button",
                                "properties": {
                                  "content": {
                                    "stringVal": {
                                      "value": "Discard"
                                    }
                                  },
                                  "variant": {
                                    "stringVal": {
                                      "value": "text"
                                    }
                                  },
                                  "text_color": {
                                    "color": {
                                      "color": "secondary_text"
                                    }
                                  }
                                },
                                "editorId": "13ebd338-2302-4f73-9ccc-bae2f8d12eb8"
                              },
                              {
                                "type": "button",
                                "properties": {
                                  "content": {
                                    "stringVal": {
                                      "value": "Deploy Agent"
                                    }
                                  },
                                  "bg": {
                                    "color": {
                                      "color": "#1A1A1A"
                                    }
                                  },
                                  "text_color": {
                                    "color": {
                                      "color": "#FFFFFF"
                                    }
                                  },
                                  "radius": {
                                    "radius": {
                                      "topLeft": 0,
                                      "topRight": 0,
                                      "bottomLeft": 0,
                                      "bottomRight": 0,
                                      "token": "md"
                                    }
                                  },
                                  "content_padding": {
                                    "edgeInsets": {
                                      "top": 0,
                                      "right": 0,
                                      "bottom": 0,
                                      "left": 0,
                                      "topToken": "lg",
                                      "rightToken": "md",
                                      "bottomToken": "lg",
                                      "leftToken": "md"
                                    }
                                  }
                                },
                                "editorId": "9cc943d8-9e3d-43c3-9f42-71039ceb2c28"
                              }
                            ],
                            "editorId": "e644bdec-cb96-421f-9fa0-b35acf9caa4a"
                          }
                        ],
                        "editorId": "89328e9b-8fd8-4d92-8bff-3307e2a098b4"
                      },
                      {
                        "type": "row",
                        "properties": {
                          "cross_align": {
                            "align": {
                              "named": "start"
                            }
                          },
                          "spacing": {
                            "stringVal": {
                              "value": "xl"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "expanded",
                            "properties": {
                              "flex": {
                                "numberVal": {
                                  "value": 3
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "column",
                                "properties": {
                                  "spacing": {
                                    "stringVal": {
                                      "value": "xl"
                                    }
                                  },
                                  "cross_align": {
                                    "align": {
                                      "named": "stretch"
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "@setting_group",
                                    "properties": {
                                      "title": {
                                        "stringVal": {
                                          "value": "Identity & Persona"
                                        }
                                      }
                                    },
                                    "children": [
                                      {
                                        "type": "column",
                                        "properties": {
                                          "spacing": {
                                            "stringVal": {
                                              "value": "md"
                                            }
                                          }
                                        },
                                        "children": [
                                          {
                                            "type": "@input_field",
                                            "properties": {
                                              "label": {
                                                "stringVal": {
                                                  "value": "Agent Name"
                                                }
                                              },
                                              "hint": {
                                                "stringVal": {
                                                  "value": "e.g. Quality Inspector"
                                                }
                                              },
                                              "value": {
                                                "stringVal": {
                                                  "value": "Quality Inspector AI"
                                                }
                                              }
                                            },
                                            "editorId": "ec489126-4524-406e-be73-5d31de6f9b24"
                                          },
                                          {
                                            "type": "@input_field",
                                            "properties": {
                                              "label": {
                                                "stringVal": {
                                                  "value": "System Role"
                                                }
                                              },
                                              "hint": {
                                                "stringVal": {
                                                  "value": "Define the agent's primary objective..."
                                                }
                                              },
                                              "value": {
                                                "stringVal": {
                                                  "value": "You are an expert manufacturing quality control engineer. Your task is to analyze production batch data and identify thermal anomalies in the curing process."
                                                }
                                              }
                                            },
                                            "editorId": "5269e835-db3b-4130-9460-c2a824b84e6c"
                                          },
                                          {
                                            "type": "column",
                                            "properties": {
                                              "spacing": {
                                                "stringVal": {
                                                  "value": "xs"
                                                }
                                              }
                                            },
                                            "children": [
                                              {
                                                "type": "text",
                                                "properties": {
                                                  "content": {
                                                    "stringVal": {
                                                      "value": "Model Selection"
                                                    }
                                                  },
                                                  "style": {
                                                    "textStyle": {
                                                      "styleName": "label_small"
                                                    }
                                                  },
                                                  "color": {
                                                    "color": {
                                                      "color": "secondary_text"
                                                    }
                                                  }
                                                },
                                                "editorId": "04a442c0-948c-405c-8761-d38d32dfc95b"
                                              },
                                              {
                                                "type": "dropdown",
                                                "properties": {
                                                  "value": {
                                                    "stringVal": {
                                                      "value": "Forge-Pro-V2 (Experimental)"
                                                    }
                                                  },
                                                  "options": {
                                                    "stringVal": {
                                                      "value": "Forge-Standard,Forge-Pro-V2 (Experimental),Legacy-Vision"
                                                    }
                                                  },
                                                  "bg": {
                                                    "color": {
                                                      "color": "#00000005"
                                                    }
                                                  },
                                                  "radius": {
                                                    "radius": {
                                                      "topLeft": 0,
                                                      "topRight": 0,
                                                      "bottomLeft": 0,
                                                      "bottomRight": 0,
                                                      "token": "md"
                                                    }
                                                  }
                                                },
                                                "editorId": "eac70755-de1d-4f16-843d-f5359d6a25d4"
                                              }
                                            ],
                                            "editorId": "6b69d042-f900-410c-996b-4941f65c6cff"
                                          }
                                        ],
                                        "editorId": "8b9e695e-4f9b-4b7c-a012-460eed39d8e5"
                                      }
                                    ],
                                    "editorId": "270bdb00-2e22-4f5f-a114-80fced03256c"
                                  },
                                  {
                                    "type": "@setting_group",
                                    "properties": {
                                      "title": {
                                        "stringVal": {
                                          "value": "Knowledge & Data Access"
                                        }
                                      }
                                    },
                                    "children": [
                                      {
                                        "type": "column",
                                        "properties": {
                                          "spacing": {
                                            "stringVal": {
                                              "value": "md"
                                            }
                                          }
                                        },
                                        "children": [
                                          {
                                            "type": "text",
                                            "properties": {
                                              "content": {
                                                "stringVal": {
                                                  "value": "Connected Databases"
                                                }
                                              },
                                              "style": {
                                                "textStyle": {
                                                  "styleName": "body_medium"
                                                }
                                              },
                                              "color": {
                                                "color": {
                                                  "color": "primary_text"
                                                }
                                              },
                                              "font_weight": {
                                                "numberVal": {
                                                  "value": 500
                                                }
                                              }
                                            },
                                            "editorId": "bca9b5b7-2790-42bc-8753-46c3056e7f7d"
                                          },
                                          {
                                            "type": "container",
                                            "properties": {
                                              "bg": {
                                                "color": {
                                                  "color": "#00000005"
                                                }
                                              },
                                              "radius": {
                                                "radius": {
                                                  "topLeft": 0,
                                                  "topRight": 0,
                                                  "bottomLeft": 0,
                                                  "bottomRight": 0,
                                                  "token": "md"
                                                }
                                              },
                                              "padding": {
                                                "edgeInsets": {
                                                  "top": 0,
                                                  "right": 0,
                                                  "bottom": 0,
                                                  "left": 0,
                                                  "token": "md"
                                                }
                                              }
                                            },
                                            "children": [
                                              {
                                                "type": "column",
                                                "properties": {
                                                  "spacing": {
                                                    "stringVal": {
                                                      "value": "sm"
                                                    }
                                                  }
                                                },
                                                "children": [
                                                  {
                                                    "type": "row",
                                                    "properties": {
                                                      "spacing": {
                                                        "stringVal": {
                                                          "value": "md"
                                                        }
                                                      }
                                                    },
                                                    "children": [
                                                      {
                                                        "type": "icon",
                                                        "properties": {
                                                          "name": {
                                                            "icon": {
                                                              "name": "description_rounded"
                                                            }
                                                          },
                                                          "color": {
                                                            "color": {
                                                              "color": "secondary_text"
                                                            }
                                                          },
                                                          "size": {
                                                            "numberVal": {
                                                              "value": 20
                                                            }
                                                          }
                                                        },
                                                        "editorId": "42dd83bc-ada2-4f81-b7a3-ecf72766e45d"
                                                      },
                                                      {
                                                        "type": "expanded",
                                                        "children": [
                                                          {
                                                            "type": "text",
                                                            "properties": {
                                                              "content": {
                                                                "stringVal": {
                                                                  "value": "ISO-9001-Standard-2023.pdf"
                                                                }
                                                              },
                                                              "style": {
                                                                "textStyle": {
                                                                  "styleName": "body_small"
                                                                }
                                                              },
                                                              "color": {
                                                                "color": {
                                                                  "color": "primary_text"
                                                                }
                                                              }
                                                            },
                                                            "editorId": "a54805e6-e2bb-41a6-b1b3-8db79ee72bc5"
                                                          }
                                                        ],
                                                        "editorId": "2f04c282-88da-4011-b016-4bb89795047f"
                                                      },
                                                      {
                                                        "type": "icon",
                                                        "properties": {
                                                          "name": {
                                                            "icon": {
                                                              "name": "check_circle_rounded"
                                                            }
                                                          },
                                                          "color": {
                                                            "color": {
                                                              "color": "success"
                                                            }
                                                          },
                                                          "size": {
                                                            "numberVal": {
                                                              "value": 16
                                                            }
                                                          }
                                                        },
                                                        "editorId": "de0839e4-c385-4505-9753-7468a9bd074d"
                                                      }
                                                    ],
                                                    "editorId": "25501b8e-530b-4c68-ba72-cc05d71418ae"
                                                  },
                                                  {
                                                    "type": "divider",
                                                    "properties": {
                                                      "color": {
                                                        "color": {
                                                          "color": "#00000008"
                                                        }
                                                      }
                                                    },
                                                    "editorId": "b3c7a9f1-0571-4724-8591-ed911e6f2cfa"
                                                  },
                                                  {
                                                    "type": "row",
                                                    "properties": {
                                                      "spacing": {
                                                        "stringVal": {
                                                          "value": "md"
                                                        }
                                                      }
                                                    },
                                                    "children": [
                                                      {
                                                        "type": "icon",
                                                        "properties": {
                                                          "name": {
                                                            "icon": {
                                                              "name": "table_chart_rounded"
                                                            }
                                                          },
                                                          "color": {
                                                            "color": {
                                                              "color": "secondary_text"
                                                            }
                                                          },
                                                          "size": {
                                                            "numberVal": {
                                                              "value": 20
                                                            }
                                                          }
                                                        },
                                                        "editorId": "d7f097dc-69dc-4d75-a9e9-feac8862970e"
                                                      },
                                                      {
                                                        "type": "expanded",
                                                        "children": [
                                                          {
                                                            "type": "text",
                                                            "properties": {
                                                              "content": {
                                                                "stringVal": {
                                                                  "value": "Production_Log_H2_2023.csv"
                                                                }
                                                              },
                                                              "style": {
                                                                "textStyle": {
                                                                  "styleName": "body_small"
                                                                }
                                                              },
                                                              "color": {
                                                                "color": {
                                                                  "color": "primary_text"
                                                                }
                                                              }
                                                            },
                                                            "editorId": "ee0e4c0b-b8df-4f8c-8555-458caba34528"
                                                          }
                                                        ],
                                                        "editorId": "737cf411-76f2-43d4-9dba-4cca778fcd2b"
                                                      },
                                                      {
                                                        "type": "icon",
                                                        "properties": {
                                                          "name": {
                                                            "icon": {
                                                              "name": "check_circle_rounded"
                                                            }
                                                          },
                                                          "color": {
                                                            "color": {
                                                              "color": "success"
                                                            }
                                                          },
                                                          "size": {
                                                            "numberVal": {
                                                              "value": 16
                                                            }
                                                          }
                                                        },
                                                        "editorId": "74c612a1-6fd3-48c1-b86f-7a23f99c3f5a"
                                                      }
                                                    ],
                                                    "editorId": "b373f7bc-4245-42cd-b1cf-8439b92249e5"
                                                  }
                                                ],
                                                "editorId": "19c8e682-c125-4637-99f4-b43162275e20"
                                              }
                                            ],
                                            "editorId": "5d83c1ac-d088-4f3d-b468-e4715b7e94a7"
                                          },
                                          {
                                            "type": "button",
                                            "properties": {
                                              "content": {
                                                "stringVal": {
                                                  "value": "Add Knowledge Source"
                                                }
                                              },
                                              "icon": {
                                                "icon": {
                                                  "name": "add_rounded"
                                                }
                                              },
                                              "variant": {
                                                "stringVal": {
                                                  "value": "outlined"
                                                }
                                              },
                                              "full_width": {
                                                "boolVal": {
                                                  "value": true
                                                }
                                              },
                                              "color": {
                                                "color": {
                                                  "color": "primary_text"
                                                }
                                              }
                                            },
                                            "editorId": "1f258b4e-bd94-4d1d-ba7e-d2144a19a0a0"
                                          }
                                        ],
                                        "editorId": "61d1ff77-9e6d-4a12-8308-32f0b9d015e2"
                                      }
                                    ],
                                    "editorId": "de7b164d-de91-4fc5-a421-9a359c5cd3b8"
                                  }
                                ],
                                "editorId": "116cbbde-44a2-4e79-86c9-ba0ca811dcf4"
                              }
                            ],
                            "editorId": "e7822ac0-6c8c-4518-a389-25ef3de5af00"
                          },
                          {
                            "type": "expanded",
                            "properties": {
                              "flex": {
                                "numberVal": {
                                  "value": 2
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "column",
                                "properties": {
                                  "spacing": {
                                    "stringVal": {
                                      "value": "xl"
                                    }
                                  },
                                  "cross_align": {
                                    "align": {
                                      "named": "stretch"
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "@setting_group",
                                    "properties": {
                                      "title": {
                                        "stringVal": {
                                          "value": "Operational Guardrails"
                                        }
                                      }
                                    },
                                    "children": [
                                      {
                                        "type": "column",
                                        "properties": {
                                          "spacing": {
                                            "stringVal": {
                                              "value": "lg"
                                            }
                                          }
                                        },
                                        "children": [
                                          {
                                            "type": "@toggle_row",
                                            "properties": {
                                              "title": {
                                                "stringVal": {
                                                  "value": "Human-in-the-loop"
                                                }
                                              },
                                              "desc": {
                                                "stringVal": {
                                                  "value": "Require approval for high-risk actions"
                                                }
                                              },
                                              "enabled": {
                                                "boolVal": {
                                                  "value": true
                                                }
                                              }
                                            },
                                            "editorId": "625c0d54-5400-480a-a598-f054f29f8d5b"
                                          },
                                          {
                                            "type": "@toggle_row",
                                            "properties": {
                                              "title": {
                                                "stringVal": {
                                                  "value": "Autonomous Quoting"
                                                }
                                              },
                                              "desc": {
                                                "stringVal": {
                                                  "value": "Allow agent to generate draft quotes"
                                                }
                                              },
                                              "enabled": {
                                                "boolVal": {
                                                  "value": false
                                                }
                                              }
                                            },
                                            "editorId": "62e5f1f5-a628-432f-bdfe-85e02450d3b8"
                                          },
                                          {
                                            "type": "@toggle_row",
                                            "properties": {
                                              "title": {
                                                "stringVal": {
                                                  "value": "Direct Slack Alerts"
                                                }
                                              },
                                              "desc": {
                                                "stringVal": {
                                                  "value": "Send anomalies to #production-floor"
                                                }
                                              },
                                              "enabled": {
                                                "boolVal": {
                                                  "value": true
                                                }
                                              }
                                            },
                                            "editorId": "93df0e3f-652c-4998-bd6a-4f808bd11b02"
                                          },
                                          {
                                            "type": "column",
                                            "properties": {
                                              "spacing": {
                                                "stringVal": {
                                                  "value": "md"
                                                }
                                              }
                                            },
                                            "children": [
                                              {
                                                "type": "text",
                                                "properties": {
                                                  "content": {
                                                    "stringVal": {
                                                      "value": "Confidence Threshold"
                                                    }
                                                  },
                                                  "style": {
                                                    "textStyle": {
                                                      "styleName": "label_small"
                                                    }
                                                  },
                                                  "color": {
                                                    "color": {
                                                      "color": "secondary_text"
                                                    }
                                                  }
                                                },
                                                "editorId": "ede13251-d215-481b-b39d-96d683c52efd"
                                              },
                                              {
                                                "type": "row",
                                                "properties": {
                                                  "spacing": {
                                                    "stringVal": {
                                                      "value": "md"
                                                    }
                                                  }
                                                },
                                                "children": [
                                                  {
                                                    "type": "expanded",
                                                    "children": [
                                                      {
                                                        "type": "slider",
                                                        "properties": {
                                                          "value": {
                                                            "numberVal": {
                                                              "value": 0.85
                                                            }
                                                          },
                                                          "min": {
                                                            "numberVal": {
                                                              "value": 0
                                                            }
                                                          },
                                                          "max": {
                                                            "numberVal": {
                                                              "value": 1
                                                            }
                                                          },
                                                          "divisions": {
                                                            "numberVal": {
                                                              "value": 20
                                                            }
                                                          },
                                                          "color": {
                                                            "color": {
                                                              "color": "#1A1A1A"
                                                            }
                                                          }
                                                        },
                                                        "editorId": "bf3d6988-e849-4c9f-8132-df24fbb77027"
                                                      }
                                                    ],
                                                    "editorId": "be5b4309-f7c9-427d-b86c-11eff2d3feff"
                                                  },
                                                  {
                                                    "type": "text",
                                                    "properties": {
                                                      "content": {
                                                        "stringVal": {
                                                          "value": "85%"
                                                        }
                                                      },
                                                      "style": {
                                                        "textStyle": {
                                                          "styleName": "body_small"
                                                        }
                                                      },
                                                      "font_weight": {
                                                        "numberVal": {
                                                          "value": 600
                                                        }
                                                      }
                                                    },
                                                    "editorId": "942d73ba-bcc7-4c03-a257-c70bf4aea80a"
                                                  }
                                                ],
                                                "editorId": "ef311412-c145-459f-acdf-b8f56cb4f0f2"
                                              }
                                            ],
                                            "editorId": "af85f937-79cc-408e-8787-166238145f99"
                                          }
                                        ],
                                        "editorId": "7d75e0f1-05de-409c-bad7-38183ba901b2"
                                      }
                                    ],
                                    "editorId": "b1da5746-7bcc-4d85-82e4-120b7ef036a9"
                                  },
                                  {
                                    "type": "@setting_group",
                                    "properties": {
                                      "title": {
                                        "stringVal": {
                                          "value": "Performance Analytics"
                                        }
                                      }
                                    },
                                    "children": [
                                      {
                                        "type": "column",
                                        "properties": {
                                          "spacing": {
                                            "stringVal": {
                                              "value": "md"
                                            }
                                          }
                                        },
                                        "children": [
                                          {
                                            "type": "text",
                                            "properties": {
                                              "content": {
                                                "stringVal": {
                                                  "value": "Accuracy over last 48h"
                                                }
                                              },
                                              "style": {
                                                "textStyle": {
                                                  "styleName": "label_small"
                                                }
                                              },
                                              "color": {
                                                "color": {
                                                  "color": "secondary_text"
                                                }
                                              }
                                            },
                                            "editorId": "f9b4be3d-6aea-4841-ad2c-4b7cafc1d67e"
                                          },
                                          {
                                            "type": "container",
                                            "properties": {
                                              "height": {
                                                "px": {
                                                  "value": 120,
                                                  "isInfinity": false
                                                }
                                              }
                                            },
                                            "children": [
                                              {
                                                "type": "line_chart",
                                                "properties": {
                                                  "data": {
                                                    "stringVal": {
                                                      "value": "82,85,84,88,92,91,95"
                                                    }
                                                  },
                                                  "labels": {
                                                    "stringVal": {
                                                      "value": "M,T,W,T,F,S,S"
                                                    }
                                                  },
                                                  "color": {
                                                    "color": {
                                                      "color": "#1A1A1A"
                                                    }
                                                  },
                                                  "curved": {
                                                    "boolVal": {
                                                      "value": true
                                                    }
                                                  },
                                                  "filled": {
                                                    "boolVal": {
                                                      "value": true
                                                    }
                                                  },
                                                  "fill_opacity": {
                                                    "numberVal": {
                                                      "value": 0.1
                                                    }
                                                  }
                                                },
                                                "editorId": "e1bf289e-7c77-4861-91a5-c47a56b44897"
                                              }
                                            ],
                                            "editorId": "5534220c-091a-4937-8f9a-44cd6f285894"
                                          },
                                          {
                                            "type": "row",
                                            "properties": {
                                              "align": {
                                                "align": {
                                                  "named": "space_between"
                                                }
                                              }
                                            },
                                            "children": [
                                              {
                                                "type": "column",
                                                "properties": {
                                                  "cross_align": {
                                                    "align": {
                                                      "named": "start"
                                                    }
                                                  }
                                                },
                                                "children": [
                                                  {
                                                    "type": "text",
                                                    "properties": {
                                                      "content": {
                                                        "stringVal": {
                                                          "value": "95.2%"
                                                        }
                                                      },
                                                      "style": {
                                                        "textStyle": {
                                                          "styleName": "title_medium"
                                                        }
                                                      },
                                                      "font_weight": {
                                                        "numberVal": {
                                                          "value": 700
                                                        }
                                                      }
                                                    },
                                                    "editorId": "0e009bb3-56a0-45bf-b396-379071f11ab6"
                                                  },
                                                  {
                                                    "type": "text",
                                                    "properties": {
                                                      "content": {
                                                        "stringVal": {
                                                          "value": "Current Precision"
                                                        }
                                                      },
                                                      "style": {
                                                        "textStyle": {
                                                          "styleName": "label_small"
                                                        }
                                                      },
                                                      "color": {
                                                        "color": {
                                                          "color": "secondary_text"
                                                        }
                                                      }
                                                    },
                                                    "editorId": "7a604244-7bb6-4176-a7a8-50fd0f1fcb1e"
                                                  }
                                                ],
                                                "editorId": "9af4a4b3-11f3-4f28-925d-70bfdac4c1d5"
                                              },
                                              {
                                                "type": "column",
                                                "properties": {
                                                  "cross_align": {
                                                    "align": {
                                                      "named": "end"
                                                    }
                                                  }
                                                },
                                                "children": [
                                                  {
                                                    "type": "text",
                                                    "properties": {
                                                      "content": {
                                                        "stringVal": {
                                                          "value": "1.2s"
                                                        }
                                                      },
                                                      "style": {
                                                        "textStyle": {
                                                          "styleName": "title_medium"
                                                        }
                                                      },
                                                      "font_weight": {
                                                        "numberVal": {
                                                          "value": 700
                                                        }
                                                      }
                                                    },
                                                    "editorId": "a008aeca-16b9-4e08-8658-124caa03f4e3"
                                                  },
                                                  {
                                                    "type": "text",
                                                    "properties": {
                                                      "content": {
                                                        "stringVal": {
                                                          "value": "Avg Latency"
                                                        }
                                                      },
                                                      "style": {
                                                        "textStyle": {
                                                          "styleName": "label_small"
                                                        }
                                                      },
                                                      "color": {
                                                        "color": {
                                                          "color": "secondary_text"
                                                        }
                                                      }
                                                    },
                                                    "editorId": "d368376c-c9cf-4343-8734-7dc8dab35d56"
                                                  }
                                                ],
                                                "editorId": "4664bdf5-94d8-4d34-b94f-1c2f46969856"
                                              }
                                            ],
                                            "editorId": "c7711ffd-448f-4694-a4a6-0b3dc9fd1c12"
                                          }
                                        ],
                                        "editorId": "526bb6f8-cb25-4e3f-8fe3-480e063a4fb5"
                                      }
                                    ],
                                    "editorId": "2035be1b-c369-4e68-8670-0aa77ae9cad9"
                                  }
                                ],
                                "editorId": "05346235-6499-45dd-94ca-a39205e49dfc"
                              }
                            ],
                            "editorId": "dd4e9f17-66b3-4be5-ac82-a169f5fdbbc2"
                          }
                        ],
                        "editorId": "ec5e163b-9269-4066-bb6d-8c32f46b8519"
                      }
                    ],
                    "editorId": "478082f4-3ca2-41e3-a554-34dc38dbe842"
                  }
                ],
                "editorId": "02decdde-8468-4b9c-a73c-19fceff01326"
              }
            ],
            "editorId": "c1258832-0afe-44c4-9c13-bcaecf8850da"
          }
        ],
        "editorId": "48c207fe-9001-45c2-9d43-4fa07037d6db"
      }
    ],
    "editorId": "0eb5ed0d-3f44-4429-843b-6cebab215465"
  },
  "components": [
    {
      "name": "nav_item",
      "root": {
        "type": "container",
        "properties": {
          "padding": {
            "edgeInsets": {
              "top": 0,
              "right": 0,
              "bottom": 0,
              "left": 0,
              "topToken": "md",
              "rightToken": "lg",
              "bottomToken": "md",
              "leftToken": "lg"
            }
          },
          "radius": {
            "radius": {
              "topLeft": 0,
              "topRight": 0,
              "bottomLeft": 0,
              "bottomRight": 0,
              "token": "md"
            }
          },
          "bg": {
            "conditional": {
              "conditionSlot": "active",
              "trueValue": {
                "color": {
                  "color": "#00000008"
                }
              },
              "falseValue": {
                "color": {
                  "color": "transparent"
                }
              }
            }
          }
        },
        "children": [
          {
            "type": "row",
            "properties": {
              "spacing": {
                "stringVal": {
                  "value": "md"
                }
              }
            },
            "children": [
              {
                "type": "icon",
                "properties": {
                  "name": {
                    "slot": {
                      "name": "icon"
                    }
                  },
                  "size": {
                    "numberVal": {
                      "value": 20
                    }
                  },
                  "color": {
                    "conditional": {
                      "conditionSlot": "active",
                      "trueValue": {
                        "color": {
                          "color": "primary_text"
                        }
                      },
                      "falseValue": {
                        "color": {
                          "color": "secondary_text"
                        }
                      }
                    }
                  }
                },
                "editorId": "64b1c46c-ae6c-4d63-90bc-2a59eafd27af"
              },
              {
                "type": "text",
                "properties": {
                  "content": {
                    "slot": {
                      "name": "label"
                    }
                  },
                  "style": {
                    "textStyle": {
                      "styleName": "body_medium"
                    }
                  },
                  "color": {
                    "conditional": {
                      "conditionSlot": "active",
                      "trueValue": {
                        "color": {
                          "color": "primary_text"
                        }
                      },
                      "falseValue": {
                        "color": {
                          "color": "secondary_text"
                        }
                      }
                    }
                  },
                  "font_weight": {
                    "conditional": {
                      "conditionSlot": "active",
                      "trueValue": {
                        "numberVal": {
                          "value": 600
                        }
                      },
                      "falseValue": {
                        "numberVal": {
                          "value": 400
                        }
                      }
                    }
                  }
                },
                "editorId": "1ef659d0-5ea2-4402-880f-80541662da78"
              }
            ],
            "editorId": "a70b129b-ec19-4e44-83f8-9fdfa23abd4d"
          }
        ],
        "editorId": "d6f8e9b7-f7a9-4e9b-8bc6-7ce37289556b"
      }
    },
    {
      "name": "setting_group",
      "root": {
        "type": "column",
        "properties": {
          "cross_align": {
            "align": {
              "named": "stretch"
            }
          },
          "spacing": {
            "stringVal": {
              "value": "md"
            }
          }
        },
        "children": [
          {
            "type": "text",
            "properties": {
              "content": {
                "slot": {
                  "name": "title"
                }
              },
              "style": {
                "textStyle": {
                  "styleName": "label_large"
                }
              },
              "color": {
                "color": {
                  "color": "primary_text"
                }
              },
              "font_weight": {
                "numberVal": {
                  "value": 600
                }
              }
            },
            "editorId": "5b17f626-9049-444b-a6d5-7469a175eb3f"
          },
          {
            "type": "container",
            "properties": {
              "bg": {
                "color": {
                  "color": "#FFFFFF40"
                }
              },
              "backdrop_blur": {
                "numberVal": {
                  "value": 10
                }
              },
              "radius": {
                "radius": {
                  "topLeft": 0,
                  "topRight": 0,
                  "bottomLeft": 0,
                  "bottomRight": 0,
                  "token": "lg"
                }
              },
              "border": {
                "border": {
                  "width": 1,
                  "color": "#FFFFFF60"
                }
              },
              "padding": {
                "edgeInsets": {
                  "top": 0,
                  "right": 0,
                  "bottom": 0,
                  "left": 0,
                  "token": "lg"
                }
              }
            },
            "children": [
              {
                "type": "column",
                "properties": {
                  "cross_align": {
                    "align": {
                      "named": "stretch"
                    }
                  },
                  "spacing": {
                    "stringVal": {
                      "value": "lg"
                    }
                  }
                },
                "children": [
                  {
                    "type": "$child",
                    "editorId": "9c35446c-6d32-46da-89a6-5863ee6cbadc"
                  }
                ],
                "editorId": "cf6a7e3d-f1f9-4483-88c7-a80db26a5f36"
              }
            ],
            "editorId": "b2889f27-d9d7-4825-892a-bb382af8a55e"
          }
        ],
        "editorId": "2cfada62-c723-4ebd-90e4-cbd06d7a05e3"
      }
    },
    {
      "name": "input_field",
      "root": {
        "type": "column",
        "properties": {
          "cross_align": {
            "align": {
              "named": "start"
            }
          },
          "spacing": {
            "stringVal": {
              "value": "xs"
            }
          }
        },
        "children": [
          {
            "type": "text",
            "properties": {
              "content": {
                "slot": {
                  "name": "label"
                }
              },
              "style": {
                "textStyle": {
                  "styleName": "label_small"
                }
              },
              "color": {
                "color": {
                  "color": "secondary_text"
                }
              }
            },
            "editorId": "9a1ef8d8-17f9-4e31-97f2-255d20cd6c66"
          },
          {
            "type": "textfield",
            "properties": {
              "hint": {
                "slot": {
                  "name": "hint"
                }
              },
              "value": {
                "slot": {
                  "name": "value"
                }
              },
              "radius": {
                "radius": {
                  "topLeft": 0,
                  "topRight": 0,
                  "bottomLeft": 0,
                  "bottomRight": 0,
                  "token": "md"
                }
              },
              "filled": {
                "boolVal": {
                  "value": true
                }
              },
              "bg": {
                "color": {
                  "color": "#00000005"
                }
              },
              "border": {
                "border": {
                  "width": 1,
                  "color": "#00000010"
                }
              }
            },
            "editorId": "f05f7a92-541b-45cb-8963-02628264033a"
          }
        ],
        "editorId": "2f71525d-bcfb-4900-b006-4318e0828957"
      }
    },
    {
      "name": "toggle_row",
      "root": {
        "type": "row",
        "properties": {
          "align": {
            "align": {
              "named": "space_between"
            }
          }
        },
        "children": [
          {
            "type": "column",
            "properties": {
              "cross_align": {
                "align": {
                  "named": "start"
                }
              },
              "spacing": {
                "numberVal": {
                  "value": 2
                }
              },
              "expanded": {
                "expanded": {
                  "enabled": true,
                  "flex": 1
                }
              }
            },
            "children": [
              {
                "type": "text",
                "properties": {
                  "content": {
                    "slot": {
                      "name": "title"
                    }
                  },
                  "style": {
                    "textStyle": {
                      "styleName": "body_medium"
                    }
                  },
                  "color": {
                    "color": {
                      "color": "primary_text"
                    }
                  },
                  "font_weight": {
                    "numberVal": {
                      "value": 500
                    }
                  }
                },
                "editorId": "1eeb09f6-33ed-428a-a009-6e3da986e34b"
              },
              {
                "type": "text",
                "properties": {
                  "content": {
                    "slot": {
                      "name": "desc"
                    }
                  },
                  "style": {
                    "textStyle": {
                      "styleName": "body_small"
                    }
                  },
                  "color": {
                    "color": {
                      "color": "secondary_text"
                    }
                  },
                  "max_lines": {
                    "numberVal": {
                      "value": 1
                    }
                  },
                  "overflow": {
                    "stringVal": {
                      "value": "ellipsis"
                    }
                  }
                },
                "editorId": "2341ee1b-f9ef-48b9-9bc0-0f5f5ed92bf7"
              }
            ],
            "editorId": "255533ca-50ef-4e79-9730-ffdd3c9ddfa5"
          },
          {
            "type": "switch",
            "properties": {
              "value": {
                "slot": {
                  "name": "enabled"
                }
              },
              "active_color": {
                "color": {
                  "color": "primary_text"
                }
              }
            },
            "editorId": "899d8d5e-7e9d-4cfa-9ded-1f96d19c3654"
          }
        ],
        "editorId": "66d90e6f-3ff3-49c9-a59b-06c5a523a991"
      }
    }
  ]
}
```

### 7. Settings & Profile

- Frame ID: `cf92ac35-9220-4b68-a8f4-c7de67337092`
- Original page prompt: "A minimalist settings page following the layered neutral surface system."
- Follow-up prompts: _None_

#### DslDocument (JSON)

```json
{
  "root": {
    "type": "scaffold",
    "properties": {
      "bg": {
        "color": {
          "color": "#F2F4F7"
        }
      },
      "safe_area": {
        "boolVal": {
          "value": true
        }
      }
    },
    "children": [
      {
        "type": "stack",
        "children": [
          {
            "type": "container",
            "properties": {
              "width": {
                "px": {
                  "value": "Infinity",
                  "isInfinity": true
                }
              },
              "height": {
                "px": {
                  "value": "Infinity",
                  "isInfinity": true
                }
              },
              "gradient": {
                "gradient": {
                  "type": "GRADIENT_TYPE_RADIAL",
                  "direction": "top_right",
                  "stops": [
                    {
                      "color": "#E0E7FF",
                      "position": 0
                    },
                    {
                      "color": "#F2F4F7",
                      "position": 70
                    }
                  ]
                }
              }
            },
            "editorId": "3ea7b7f3-2601-45f7-92da-7c28d03bbc8e"
          },
          {
            "type": "row",
            "properties": {
              "cross_align": {
                "align": {
                  "named": "stretch"
                }
              }
            },
            "children": [
              {
                "type": "container",
                "properties": {
                  "width": {
                    "px": {
                      "value": 260,
                      "isInfinity": false
                    }
                  },
                  "bg": {
                    "color": {
                      "color": "#FFFFFF88"
                    }
                  },
                  "backdrop_blur": {
                    "numberVal": {
                      "value": 20
                    }
                  },
                  "border": {
                    "borderSided": {
                      "side": "right",
                      "width": 1,
                      "color": "#00000008"
                    }
                  },
                  "padding": {
                    "edgeInsets": {
                      "top": 0,
                      "right": 0,
                      "bottom": 0,
                      "left": 0,
                      "topToken": "lg",
                      "rightToken": "md",
                      "bottomToken": "lg",
                      "leftToken": "md"
                    }
                  }
                },
                "children": [
                  {
                    "type": "column",
                    "properties": {
                      "cross_align": {
                        "align": {
                          "named": "stretch"
                        }
                      }
                    },
                    "children": [
                      {
                        "type": "row",
                        "properties": {
                          "spacing": {
                            "stringVal": {
                              "value": "sm"
                            }
                          },
                          "padding": {
                            "edgeInsets": {
                              "top": 0,
                              "right": 0,
                              "bottom": 0,
                              "left": 0,
                              "bottomToken": "xl"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "container",
                            "properties": {
                              "width": {
                                "px": {
                                  "value": 32,
                                  "isInfinity": false
                                }
                              },
                              "height": {
                                "px": {
                                  "value": 32,
                                  "isInfinity": false
                                }
                              },
                              "bg": {
                                "color": {
                                  "color": "primary_text"
                                }
                              },
                              "radius": {
                                "radius": {
                                  "topLeft": 0,
                                  "topRight": 0,
                                  "bottomLeft": 0,
                                  "bottomRight": 0,
                                  "token": "md"
                                }
                              },
                              "align_child": {
                                "align": {
                                  "named": "center"
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "icon",
                                "properties": {
                                  "name": {
                                    "icon": {
                                      "name": "terminal_rounded"
                                    }
                                  },
                                  "color": {
                                    "color": {
                                      "color": "background"
                                    }
                                  },
                                  "size": {
                                    "numberVal": {
                                      "value": 18
                                    }
                                  }
                                },
                                "editorId": "e3c9d8cd-b931-4ea2-95b2-9e171935a2c1"
                              }
                            ],
                            "editorId": "dd11d1c6-41b5-44b6-a813-15e16215031c"
                          },
                          {
                            "type": "text",
                            "properties": {
                              "content": {
                                "stringVal": {
                                  "value": "FORGE"
                                }
                              },
                              "style": {
                                "textStyle": {
                                  "styleName": "title_medium"
                                }
                              },
                              "font_weight": {
                                "numberVal": {
                                  "value": 800
                                }
                              },
                              "color": {
                                "color": {
                                  "color": "primary_text"
                                }
                              }
                            },
                            "editorId": "c5171fe7-b771-42d3-ab78-17d2eff44155"
                          }
                        ],
                        "editorId": "5b1a5ece-06be-436c-a7d5-609fc4aa08fc"
                      },
                      {
                        "type": "column",
                        "properties": {
                          "spacing": {
                            "stringVal": {
                              "value": "xs"
                            }
                          },
                          "cross_align": {
                            "align": {
                              "named": "stretch"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "@sidebar_item",
                            "properties": {
                              "icon": {
                                "stringVal": {
                                  "value": "space_dashboard_rounded"
                                }
                              },
                              "label": {
                                "stringVal": {
                                  "value": "Insights"
                                }
                              },
                              "active": {
                                "boolVal": {
                                  "value": false
                                }
                              }
                            },
                            "editorId": "24febbcd-334a-45af-9461-e73fded208f7"
                          },
                          {
                            "type": "@sidebar_item",
                            "properties": {
                              "icon": {
                                "stringVal": {
                                  "value": "request_quote_rounded"
                                }
                              },
                              "label": {
                                "stringVal": {
                                  "value": "Quoting"
                                }
                              },
                              "active": {
                                "boolVal": {
                                  "value": false
                                }
                              }
                            },
                            "editorId": "a41f990b-4e2e-40eb-a3c4-98954cacd408"
                          },
                          {
                            "type": "@sidebar_item",
                            "properties": {
                              "icon": {
                                "stringVal": {
                                  "value": "auto_awesome_rounded"
                                }
                              },
                              "label": {
                                "stringVal": {
                                  "value": "AI Chat"
                                }
                              },
                              "active": {
                                "boolVal": {
                                  "value": false
                                }
                              }
                            },
                            "editorId": "11dd20c9-5b9a-428a-bb5a-f84068ea22df"
                          },
                          {
                            "type": "@sidebar_item",
                            "properties": {
                              "icon": {
                                "stringVal": {
                                  "value": "smart_toy_rounded"
                                }
                              },
                              "label": {
                                "stringVal": {
                                  "value": "Agents"
                                }
                              },
                              "active": {
                                "boolVal": {
                                  "value": false
                                }
                              }
                            },
                            "editorId": "2e7bd65d-f0e9-4a4b-90a2-689bb6403458"
                          }
                        ],
                        "editorId": "edbd30cc-9632-4d81-914a-140ba600aa88"
                      },
                      {
                        "type": "spacer",
                        "editorId": "f02a5d2f-8024-4e38-be78-7fa13e596431"
                      },
                      {
                        "type": "@sidebar_item",
                        "properties": {
                          "icon": {
                            "stringVal": {
                              "value": "settings_rounded"
                            }
                          },
                          "label": {
                            "stringVal": {
                              "value": "Settings"
                            }
                          },
                          "active": {
                            "boolVal": {
                              "value": true
                            }
                          }
                        },
                        "editorId": "1b82fd4b-ff94-4251-b6e4-d1fb5108c050"
                      },
                      {
                        "type": "@sidebar_item",
                        "properties": {
                          "icon": {
                            "stringVal": {
                              "value": "logout_rounded"
                            }
                          },
                          "label": {
                            "stringVal": {
                              "value": "Sign Out"
                            }
                          },
                          "active": {
                            "boolVal": {
                              "value": false
                            }
                          }
                        },
                        "editorId": "872d6eb2-cdc4-4d56-ace7-777e2860b0c8"
                      }
                    ],
                    "editorId": "f75deecd-1a6f-40cd-ad6d-6e16d6843514"
                  }
                ],
                "editorId": "e6e0a326-d6a6-4c13-b9c5-e7e305205319"
              },
              {
                "type": "expanded",
                "children": [
                  {
                    "type": "column",
                    "properties": {
                      "scroll": {
                        "boolVal": {
                          "value": true
                        }
                      },
                      "padding": {
                        "edgeInsets": {
                          "top": 0,
                          "right": 0,
                          "bottom": 0,
                          "left": 0,
                          "token": "xl"
                        }
                      },
                      "spacing": {
                        "stringVal": {
                          "value": "xl"
                        }
                      },
                      "cross_align": {
                        "align": {
                          "named": "center"
                        }
                      }
                    },
                    "children": [
                      {
                        "type": "container",
                        "properties": {
                          "max_width": {
                            "px": {
                              "value": 800,
                              "isInfinity": false
                            }
                          },
                          "cross_align": {
                            "align": {
                              "named": "stretch"
                            }
                          }
                        },
                        "children": [
                          {
                            "type": "column",
                            "properties": {
                              "spacing": {
                                "stringVal": {
                                  "value": "xl"
                                }
                              },
                              "cross_align": {
                                "align": {
                                  "named": "stretch"
                                }
                              }
                            },
                            "children": [
                              {
                                "type": "column",
                                "properties": {
                                  "cross_align": {
                                    "align": {
                                      "named": "start"
                                    }
                                  },
                                  "spacing": {
                                    "stringVal": {
                                      "value": "xs"
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "text",
                                    "properties": {
                                      "content": {
                                        "stringVal": {
                                          "value": "Settings"
                                        }
                                      },
                                      "style": {
                                        "textStyle": {
                                          "styleName": "headline_medium"
                                        }
                                      },
                                      "font_weight": {
                                        "numberVal": {
                                          "value": 700
                                        }
                                      },
                                      "color": {
                                        "color": {
                                          "color": "primary_text"
                                        }
                                      }
                                    },
                                    "editorId": "f9c20cfd-8c2a-48a7-89a8-04076e7b7f1c"
                                  },
                                  {
                                    "type": "text",
                                    "properties": {
                                      "content": {
                                        "stringVal": {
                                          "value": "Manage your manufacturing workspace and AI preferences."
                                        }
                                      },
                                      "style": {
                                        "textStyle": {
                                          "styleName": "body_large"
                                        }
                                      },
                                      "color": {
                                        "color": {
                                          "color": "secondary_text"
                                        }
                                      }
                                    },
                                    "editorId": "732afa50-65a0-41db-9390-2a558acbf4a9"
                                  }
                                ],
                                "editorId": "fd3ebcba-3ce9-4847-adf2-1161d596be5d"
                              },
                              {
                                "type": "@settings_section",
                                "properties": {
                                  "title": {
                                    "stringVal": {
                                      "value": "Profile Details"
                                    }
                                  },
                                  "subtitle": {
                                    "stringVal": {
                                      "value": "Your personal information and identity."
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "column",
                                    "properties": {
                                      "spacing": {
                                        "stringVal": {
                                          "value": "lg"
                                        }
                                      }
                                    },
                                    "children": [
                                      {
                                        "type": "row",
                                        "properties": {
                                          "spacing": {
                                            "stringVal": {
                                              "value": "lg"
                                            }
                                          }
                                        },
                                        "children": [
                                          {
                                            "type": "avatar",
                                            "properties": {
                                              "size": {
                                                "numberVal": {
                                                  "value": 64
                                                }
                                              },
                                              "bg": {
                                                "color": {
                                                  "color": "primary_text"
                                                }
                                              },
                                              "color": {
                                                "color": {
                                                  "color": "background"
                                                }
                                              },
                                              "text": {
                                                "stringVal": {
                                                  "value": "JD"
                                                }
                                              }
                                            },
                                            "editorId": "08a9d157-ce7d-49cc-a68c-15b381def08c"
                                          },
                                          {
                                            "type": "column",
                                            "properties": {
                                              "cross_align": {
                                                "align": {
                                                  "named": "start"
                                                }
                                              },
                                              "spacing": {
                                                "stringVal": {
                                                  "value": "xs"
                                                }
                                              }
                                            },
                                            "children": [
                                              {
                                                "type": "button",
                                                "properties": {
                                                  "content": {
                                                    "stringVal": {
                                                      "value": "Change Photo"
                                                    }
                                                  },
                                                  "variant": {
                                                    "stringVal": {
                                                      "value": "outlined"
                                                    }
                                                  },
                                                  "size": {
                                                    "stringVal": {
                                                      "value": "small"
                                                    }
                                                  },
                                                  "color": {
                                                    "color": {
                                                      "color": "primary_text"
                                                    }
                                                  }
                                                },
                                                "editorId": "c1d32116-2fd5-43e8-87cf-6ee37b2d6ddd"
                                              },
                                              {
                                                "type": "text",
                                                "properties": {
                                                  "content": {
                                                    "stringVal": {
                                                      "value": "JPG or PNG. Max 1MB."
                                                    }
                                                  },
                                                  "style": {
                                                    "textStyle": {
                                                      "styleName": "label_small"
                                                    }
                                                  },
                                                  "color": {
                                                    "color": {
                                                      "color": "secondary_text"
                                                    }
                                                  }
                                                },
                                                "editorId": "9fcd138a-4b2a-4055-b086-00e17ab1c012"
                                              }
                                            ],
                                            "editorId": "77ec2cd0-0959-4048-a563-fe211cd3473e"
                                          }
                                        ],
                                        "editorId": "33d61a5f-2d18-4075-b54e-48486edd829a"
                                      },
                                      {
                                        "type": "row",
                                        "properties": {
                                          "spacing": {
                                            "stringVal": {
                                              "value": "md"
                                            }
                                          }
                                        },
                                        "children": [
                                          {
                                            "type": "@input_group",
                                            "properties": {
                                              "label": {
                                                "stringVal": {
                                                  "value": "FULL NAME"
                                                }
                                              },
                                              "value": {
                                                "stringVal": {
                                                  "value": "Julian Detmer"
                                                }
                                              }
                                            },
                                            "editorId": "b5262eec-0963-4618-a367-a855f21d4be7"
                                          },
                                          {
                                            "type": "@input_group",
                                            "properties": {
                                              "label": {
                                                "stringVal": {
                                                  "value": "WORK EMAIL"
                                                }
                                              },
                                              "value": {
                                                "stringVal": {
                                                  "value": "julian@forge-intel.com"
                                                }
                                              }
                                            },
                                            "editorId": "0214f294-07d6-479d-945d-52355ddc1cd8"
                                          }
                                        ],
                                        "editorId": "c22f0b9e-d524-44d4-b77d-d567a968d2e2"
                                      },
                                      {
                                        "type": "row",
                                        "properties": {
                                          "spacing": {
                                            "stringVal": {
                                              "value": "md"
                                            }
                                          }
                                        },
                                        "children": [
                                          {
                                            "type": "@input_group",
                                            "properties": {
                                              "label": {
                                                "stringVal": {
                                                  "value": "ROLE"
                                                }
                                              },
                                              "value": {
                                                "stringVal": {
                                                  "value": "Production Manager"
                                                }
                                              }
                                            },
                                            "editorId": "90003855-2ded-4502-aaa8-28c06d509fe5"
                                          },
                                          {
                                            "type": "@input_group",
                                            "properties": {
                                              "label": {
                                                "stringVal": {
                                                  "value": "DEPARTMENT"
                                                }
                                              },
                                              "value": {
                                                "stringVal": {
                                                  "value": "Assembly Line B"
                                                }
                                              }
                                            },
                                            "editorId": "16837fb4-7caf-4141-a5b1-c8656301d406"
                                          }
                                        ],
                                        "editorId": "d4130df3-3694-44c0-98a1-c2c171ac6d83"
                                      }
                                    ],
                                    "editorId": "436ec87d-5c6a-490b-a3d4-6a00bf07873d"
                                  }
                                ],
                                "editorId": "a28dc88a-9579-4cff-a785-c2293cfc7002"
                              },
                              {
                                "type": "@settings_section",
                                "properties": {
                                  "title": {
                                    "stringVal": {
                                      "value": "AI & Knowledge Base"
                                    }
                                  },
                                  "subtitle": {
                                    "stringVal": {
                                      "value": "Control how agents access company documentation."
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "column",
                                    "properties": {
                                      "spacing": {
                                        "stringVal": {
                                          "value": "lg"
                                        }
                                      }
                                    },
                                    "children": [
                                      {
                                        "type": "@toggle_row",
                                        "properties": {
                                          "label": {
                                            "stringVal": {
                                              "value": "Real-time Doc Sync"
                                            }
                                          },
                                          "desc": {
                                            "stringVal": {
                                              "value": "Automatically index new technical manuals and PDFs."
                                            }
                                          },
                                          "value": {
                                            "boolVal": {
                                              "value": true
                                            }
                                          }
                                        },
                                        "editorId": "274f5b6b-746e-49c3-9a9d-08a5f9723f2a"
                                      },
                                      {
                                        "type": "@toggle_row",
                                        "properties": {
                                          "label": {
                                            "stringVal": {
                                              "value": "Agent Autonomy"
                                            }
                                          },
                                          "desc": {
                                            "stringVal": {
                                              "value": "Allow agents to initiate quoting drafts without approval."
                                            }
                                          },
                                          "value": {
                                            "boolVal": {
                                              "value": false
                                            }
                                          }
                                        },
                                        "editorId": "b2510ae8-0358-455e-8b7d-206cf59c600c"
                                      },
                                      {
                                        "type": "@toggle_row",
                                        "properties": {
                                          "label": {
                                            "stringVal": {
                                              "value": "Technical Verbosity"
                                            }
                                          },
                                          "desc": {
                                            "stringVal": {
                                              "value": "AI responses will include deep engineering specifications."
                                            }
                                          },
                                          "value": {
                                            "boolVal": {
                                              "value": true
                                            }
                                          }
                                        },
                                        "editorId": "2f7d3f44-13c0-460e-8809-e099a22c6488"
                                      },
                                      {
                                        "type": "divider",
                                        "properties": {
                                          "color": {
                                            "color": {
                                              "color": "#00000008"
                                            }
                                          }
                                        },
                                        "editorId": "ef2db859-0107-4dfb-a2fc-9dd2588d075b"
                                      },
                                      {
                                        "type": "column",
                                        "properties": {
                                          "cross_align": {
                                            "align": {
                                              "named": "start"
                                            }
                                          },
                                          "spacing": {
                                            "stringVal": {
                                              "value": "sm"
                                            }
                                          }
                                        },
                                        "children": [
                                          {
                                            "type": "text",
                                            "properties": {
                                              "content": {
                                                "stringVal": {
                                                  "value": "Connected Repositories"
                                                }
                                              },
                                              "style": {
                                                "textStyle": {
                                                  "styleName": "label_small"
                                                }
                                              },
                                              "color": {
                                                "color": {
                                                  "color": "secondary_text"
                                                }
                                              },
                                              "font_weight": {
                                                "numberVal": {
                                                  "value": 600
                                                }
                                              }
                                            },
                                            "editorId": "d5ea5381-98d6-45c8-99fb-2828981d2b36"
                                          },
                                          {
                                            "type": "row",
                                            "properties": {
                                              "spacing": {
                                                "stringVal": {
                                                  "value": "sm"
                                                }
                                              }
                                            },
                                            "children": [
                                              {
                                                "type": "chip",
                                                "properties": {
                                                  "content": {
                                                    "stringVal": {
                                                      "value": "ERP-Connector-v2"
                                                    }
                                                  },
                                                  "icon": {
                                                    "icon": {
                                                      "name": "link_rounded"
                                                    }
                                                  },
                                                  "bg": {
                                                    "color": {
                                                      "color": "#00000008"
                                                    }
                                                  }
                                                },
                                                "editorId": "6e6c16ff-dde3-4976-b252-a1ae0b07b11f"
                                              },
                                              {
                                                "type": "chip",
                                                "properties": {
                                                  "content": {
                                                    "stringVal": {
                                                      "value": "Technical_Manuals_2024"
                                                    }
                                                  },
                                                  "icon": {
                                                    "icon": {
                                                      "name": "folder_rounded"
                                                    }
                                                  },
                                                  "bg": {
                                                    "color": {
                                                      "color": "#00000008"
                                                    }
                                                  }
                                                },
                                                "editorId": "1077a3a9-e4d2-4e3f-94c8-7df712efe47d"
                                              },
                                              {
                                                "type": "button",
                                                "properties": {
                                                  "icon": {
                                                    "icon": {
                                                      "name": "add_rounded"
                                                    }
                                                  },
                                                  "content": {
                                                    "stringVal": {
                                                      "value": "Add Source"
                                                    }
                                                  },
                                                  "variant": {
                                                    "stringVal": {
                                                      "value": "text"
                                                    }
                                                  },
                                                  "size": {
                                                    "stringVal": {
                                                      "value": "small"
                                                    }
                                                  },
                                                  "color": {
                                                    "color": {
                                                      "color": "primary_text"
                                                    }
                                                  }
                                                },
                                                "editorId": "dbd4f67c-0169-4609-8bad-18a314ac886c"
                                              }
                                            ],
                                            "editorId": "ebaa9e97-0f3e-46a8-9191-d953728c27e6"
                                          }
                                        ],
                                        "editorId": "12232b06-2c53-4bf4-8423-e102715490f1"
                                      }
                                    ],
                                    "editorId": "7bc4c861-8fa6-4451-ac71-2574e910cb41"
                                  }
                                ],
                                "editorId": "865ffbfe-4e21-4711-8c4d-d0628627acd7"
                              },
                              {
                                "type": "@settings_section",
                                "properties": {
                                  "title": {
                                    "stringVal": {
                                      "value": "Security"
                                    }
                                  },
                                  "subtitle": {
                                    "stringVal": {
                                      "value": "Protect your manufacturing data."
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "column",
                                    "properties": {
                                      "spacing": {
                                        "stringVal": {
                                          "value": "lg"
                                        }
                                      }
                                    },
                                    "children": [
                                      {
                                        "type": "row",
                                        "properties": {
                                          "align": {
                                            "align": {
                                              "named": "space_between"
                                            }
                                          }
                                        },
                                        "children": [
                                          {
                                            "type": "column",
                                            "properties": {
                                              "cross_align": {
                                                "align": {
                                                  "named": "start"
                                                }
                                              },
                                              "spacing": {
                                                "stringVal": {
                                                  "value": "xs"
                                                }
                                              }
                                            },
                                            "children": [
                                              {
                                                "type": "text",
                                                "properties": {
                                                  "content": {
                                                    "stringVal": {
                                                      "value": "Two-Factor Authentication"
                                                    }
                                                  },
                                                  "style": {
                                                    "textStyle": {
                                                      "styleName": "body_medium"
                                                    }
                                                  },
                                                  "color": {
                                                    "color": {
                                                      "color": "primary_text"
                                                    }
                                                  },
                                                  "font_weight": {
                                                    "numberVal": {
                                                      "value": 500
                                                    }
                                                  }
                                                },
                                                "editorId": "91ec674b-f309-43b7-a656-6b756e783c38"
                                              },
                                              {
                                                "type": "text",
                                                "properties": {
                                                  "content": {
                                                    "stringVal": {
                                                      "value": "Recommended for all manager accounts."
                                                    }
                                                  },
                                                  "style": {
                                                    "textStyle": {
                                                      "styleName": "body_small"
                                                    }
                                                  },
                                                  "color": {
                                                    "color": {
                                                      "color": "secondary_text"
                                                    }
                                                  }
                                                },
                                                "editorId": "1c07dfc0-0036-40a0-82a5-4439a42d6798"
                                              }
                                            ],
                                            "editorId": "9f8f75e5-fbe4-4e15-816a-f41d04a961e6"
                                          },
                                          {
                                            "type": "button",
                                            "properties": {
                                              "content": {
                                                "stringVal": {
                                                  "value": "Enable"
                                                }
                                              },
                                              "variant": {
                                                "stringVal": {
                                                  "value": "tonal"
                                                }
                                              },
                                              "size": {
                                                "stringVal": {
                                                  "value": "small"
                                                }
                                              },
                                              "color": {
                                                "color": {
                                                  "color": "primary_text"
                                                }
                                              }
                                            },
                                            "editorId": "610f9288-7682-442a-aa8e-c2c9d8e9a642"
                                          }
                                        ],
                                        "editorId": "49fdcdcf-abf6-4361-aaf2-99f862d25a49"
                                      },
                                      {
                                        "type": "divider",
                                        "properties": {
                                          "color": {
                                            "color": {
                                              "color": "#00000008"
                                            }
                                          }
                                        },
                                        "editorId": "0dafe710-c96c-4dfe-8903-53db549d99f9"
                                      },
                                      {
                                        "type": "row",
                                        "properties": {
                                          "align": {
                                            "align": {
                                              "named": "space_between"
                                            }
                                          }
                                        },
                                        "children": [
                                          {
                                            "type": "column",
                                            "properties": {
                                              "cross_align": {
                                                "align": {
                                                  "named": "start"
                                                }
                                              },
                                              "spacing": {
                                                "stringVal": {
                                                  "value": "xs"
                                                }
                                              }
                                            },
                                            "children": [
                                              {
                                                "type": "text",
                                                "properties": {
                                                  "content": {
                                                    "stringVal": {
                                                      "value": "Data Residency"
                                                    }
                                                  },
                                                  "style": {
                                                    "textStyle": {
                                                      "styleName": "body_medium"
                                                    }
                                                  },
                                                  "color": {
                                                    "color": {
                                                      "color": "primary_text"
                                                    }
                                                  },
                                                  "font_weight": {
                                                    "numberVal": {
                                                      "value": 500
                                                    }
                                                  }
                                                },
                                                "editorId": "3c90708f-5ae6-4e93-ab40-55e870e5877c"
                                              },
                                              {
                                                "type": "text",
                                                "properties": {
                                                  "content": {
                                                    "stringVal": {
                                                      "value": "Current: Frankfurt, Germany (EU-Central-1)"
                                                    }
                                                  },
                                                  "style": {
                                                    "textStyle": {
                                                      "styleName": "body_small"
                                                    }
                                                  },
                                                  "color": {
                                                    "color": {
                                                      "color": "secondary_text"
                                                    }
                                                  }
                                                },
                                                "editorId": "05689732-4a1e-4e25-bc9c-b34c8d736c62"
                                              }
                                            ],
                                            "editorId": "3f0027cd-ec46-4dad-849b-d67da6610a39"
                                          },
                                          {
                                            "type": "button",
                                            "properties": {
                                              "content": {
                                                "stringVal": {
                                                  "value": "Request Migration"
                                                }
                                              },
                                              "variant": {
                                                "stringVal": {
                                                  "value": "text"
                                                }
                                              },
                                              "size": {
                                                "stringVal": {
                                                  "value": "small"
                                                }
                                              },
                                              "color": {
                                                "color": {
                                                  "color": "secondary_text"
                                                }
                                              }
                                            },
                                            "editorId": "ad231420-5293-4a4a-b9e3-795b83452ef0"
                                          }
                                        ],
                                        "editorId": "98bff273-8bc0-4983-876a-b908b233ec36"
                                      }
                                    ],
                                    "editorId": "8b1355aa-1ec5-40c6-a3ad-5d41e77265a2"
                                  }
                                ],
                                "editorId": "02e06b8c-e77e-466e-b9a7-f8bec85e7b82"
                              },
                              {
                                "type": "row",
                                "properties": {
                                  "align": {
                                    "align": {
                                      "named": "end"
                                    }
                                  },
                                  "spacing": {
                                    "stringVal": {
                                      "value": "md"
                                    }
                                  },
                                  "padding": {
                                    "edgeInsets": {
                                      "top": 0,
                                      "right": 0,
                                      "bottom": 0,
                                      "left": 0,
                                      "bottomToken": "xl"
                                    }
                                  }
                                },
                                "children": [
                                  {
                                    "type": "button",
                                    "properties": {
                                      "content": {
                                        "stringVal": {
                                          "value": "Discard Changes"
                                        }
                                      },
                                      "variant": {
                                        "stringVal": {
                                          "value": "text"
                                        }
                                      },
                                      "color": {
                                        "color": {
                                          "color": "secondary_text"
                                        }
                                      }
                                    },
                                    "editorId": "233e738f-8623-469f-a35b-15ce19e1e2d9"
                                  },
                                  {
                                    "type": "container",
                                    "properties": {
                                      "bg": {
                                        "color": {
                                          "color": "primary_text"
                                        }
                                      },
                                      "radius": {
                                        "radius": {
                                          "topLeft": 0,
                                          "topRight": 0,
                                          "bottomLeft": 0,
                                          "bottomRight": 0,
                                          "token": "md"
                                        }
                                      },
                                      "padding": {
                                        "edgeInsets": {
                                          "top": 0,
                                          "right": 0,
                                          "bottom": 0,
                                          "left": 0,
                                          "topToken": "md",
                                          "rightToken": "xl",
                                          "bottomToken": "md",
                                          "leftToken": "xl"
                                        }
                                      },
                                      "align_child": {
                                        "align": {
                                          "named": "center"
                                        }
                                      }
                                    },
                                    "children": [
                                      {
                                        "type": "text",
                                        "properties": {
                                          "content": {
                                            "stringVal": {
                                              "value": "Save Configuration"
                                            }
                                          },
                                          "color": {
                                            "color": {
                                              "color": "background"
                                            }
                                          },
                                          "font_weight": {
                                            "numberVal": {
                                              "value": 600
                                            }
                                          },
                                          "style": {
                                            "textStyle": {
                                              "styleName": "label_large"
                                            }
                                          }
                                        },
                                        "editorId": "996db646-84e7-47a5-9c9a-080a4cacc5ab"
                                      }
                                    ],
                                    "editorId": "75c4bf56-493e-4084-a21b-19fb93d56b3c"
                                  }
                                ],
                                "editorId": "a0d2a2e6-0c19-40f8-94ce-6e825f7699fd"
                              }
                            ],
                            "editorId": "4632518d-4229-446a-b4c8-14071a6a0f26"
                          }
                        ],
                        "editorId": "6ef01267-0e03-45c6-810e-d98cbdec34db"
                      }
                    ],
                    "editorId": "edc8554d-cc09-4f1f-9577-ab94b871aeae"
                  }
                ],
                "editorId": "fe5af3ba-7c24-4feb-b2cb-7820c765beae"
              }
            ],
            "editorId": "534797f0-66e4-4e5b-bf8b-872093f959b5"
          }
        ],
        "editorId": "3ad843ee-0b9c-45fb-baea-01cc57dfb5a1"
      }
    ],
    "editorId": "71a1bba0-d06c-4e70-9b19-8dbd11ee208c"
  },
  "components": [
    {
      "name": "sidebar_item",
      "root": {
        "type": "container",
        "properties": {
          "padding": {
            "edgeInsets": {
              "top": 0,
              "right": 0,
              "bottom": 0,
              "left": 0,
              "topToken": "md",
              "rightToken": "lg",
              "bottomToken": "md",
              "leftToken": "lg"
            }
          },
          "radius": {
            "radius": {
              "topLeft": 0,
              "topRight": 0,
              "bottomLeft": 0,
              "bottomRight": 0,
              "token": "md"
            }
          },
          "bg": {
            "conditional": {
              "conditionSlot": "active",
              "trueValue": {
                "color": {
                  "color": "#00000008"
                }
              },
              "falseValue": {
                "color": {
                  "color": "transparent"
                }
              }
            }
          }
        },
        "children": [
          {
            "type": "row",
            "properties": {
              "spacing": {
                "stringVal": {
                  "value": "md"
                }
              }
            },
            "children": [
              {
                "type": "icon",
                "properties": {
                  "name": {
                    "slot": {
                      "name": "icon"
                    }
                  },
                  "size": {
                    "numberVal": {
                      "value": 20
                    }
                  },
                  "color": {
                    "conditional": {
                      "conditionSlot": "active",
                      "trueValue": {
                        "color": {
                          "color": "primary_text"
                        }
                      },
                      "falseValue": {
                        "color": {
                          "color": "secondary_text"
                        }
                      }
                    }
                  }
                },
                "editorId": "469bc08f-eb18-483c-8d45-0c9374314bb7"
              },
              {
                "type": "text",
                "properties": {
                  "content": {
                    "slot": {
                      "name": "label"
                    }
                  },
                  "style": {
                    "textStyle": {
                      "styleName": "body_medium"
                    }
                  },
                  "color": {
                    "conditional": {
                      "conditionSlot": "active",
                      "trueValue": {
                        "color": {
                          "color": "primary_text"
                        }
                      },
                      "falseValue": {
                        "color": {
                          "color": "secondary_text"
                        }
                      }
                    }
                  },
                  "font_weight": {
                    "conditional": {
                      "conditionSlot": "active",
                      "trueValue": {
                        "numberVal": {
                          "value": 600
                        }
                      },
                      "falseValue": {
                        "numberVal": {
                          "value": 400
                        }
                      }
                    }
                  }
                },
                "editorId": "13472f59-2ab5-4bc8-ab24-981e12d17f14"
              }
            ],
            "editorId": "0feba2d5-9a50-4e39-88b1-8b849f4fff0e"
          }
        ],
        "editorId": "4c123c48-40d3-40dc-9584-aefc07468116"
      }
    },
    {
      "name": "settings_section",
      "root": {
        "type": "column",
        "properties": {
          "cross_align": {
            "align": {
              "named": "stretch"
            }
          },
          "spacing": {
            "stringVal": {
              "value": "md"
            }
          }
        },
        "children": [
          {
            "type": "column",
            "properties": {
              "cross_align": {
                "align": {
                  "named": "start"
                }
              },
              "spacing": {
                "stringVal": {
                  "value": "xs"
                }
              }
            },
            "children": [
              {
                "type": "text",
                "properties": {
                  "content": {
                    "slot": {
                      "name": "title"
                    }
                  },
                  "style": {
                    "textStyle": {
                      "styleName": "title_medium"
                    }
                  },
                  "font_weight": {
                    "numberVal": {
                      "value": 600
                    }
                  },
                  "color": {
                    "color": {
                      "color": "primary_text"
                    }
                  }
                },
                "editorId": "3517ae5d-84df-488a-9c29-532c33add697"
              },
              {
                "type": "text",
                "properties": {
                  "content": {
                    "slot": {
                      "name": "subtitle"
                    }
                  },
                  "style": {
                    "textStyle": {
                      "styleName": "body_small"
                    }
                  },
                  "color": {
                    "color": {
                      "color": "secondary_text"
                    }
                  }
                },
                "editorId": "b2b3dc7d-9e35-4e90-8951-8c037ace8f1e"
              }
            ],
            "editorId": "dd24e113-deb6-4f67-9f8d-bba2e70e68d1"
          },
          {
            "type": "container",
            "properties": {
              "bg": {
                "color": {
                  "color": "#FFFFFF66"
                }
              },
              "backdrop_blur": {
                "numberVal": {
                  "value": 10
                }
              },
              "radius": {
                "radius": {
                  "topLeft": 0,
                  "topRight": 0,
                  "bottomLeft": 0,
                  "bottomRight": 0,
                  "token": "lg"
                }
              },
              "border": {
                "border": {
                  "width": 1,
                  "color": "#FFFFFF44"
                }
              },
              "padding": {
                "edgeInsets": {
                  "top": 0,
                  "right": 0,
                  "bottom": 0,
                  "left": 0,
                  "token": "lg"
                }
              }
            },
            "children": [
              {
                "type": "column",
                "properties": {
                  "cross_align": {
                    "align": {
                      "named": "stretch"
                    }
                  },
                  "spacing": {
                    "stringVal": {
                      "value": "lg"
                    }
                  }
                },
                "children": [
                  {
                    "type": "$child",
                    "editorId": "3e6b17ac-e519-42a5-a83f-a635d4c37624"
                  }
                ],
                "editorId": "a555c469-ee42-43a7-9f25-5d3adeba8f4c"
              }
            ],
            "editorId": "644b3d2c-d549-4f17-a160-842cf3094de1"
          }
        ],
        "editorId": "4270bf8f-fcb1-46e1-8eb0-b7ad8d368b60"
      }
    },
    {
      "name": "toggle_row",
      "root": {
        "type": "row",
        "properties": {
          "align": {
            "align": {
              "named": "space_between"
            }
          }
        },
        "children": [
          {
            "type": "column",
            "properties": {
              "cross_align": {
                "align": {
                  "named": "start"
                }
              },
              "spacing": {
                "stringVal": {
                  "value": "xs"
                }
              },
              "expanded": {
                "expanded": {
                  "enabled": true,
                  "flex": 1
                }
              }
            },
            "children": [
              {
                "type": "text",
                "properties": {
                  "content": {
                    "slot": {
                      "name": "label"
                    }
                  },
                  "style": {
                    "textStyle": {
                      "styleName": "body_medium"
                    }
                  },
                  "color": {
                    "color": {
                      "color": "primary_text"
                    }
                  },
                  "font_weight": {
                    "numberVal": {
                      "value": 500
                    }
                  }
                },
                "editorId": "45b32988-3997-498b-83ca-537685a9fd6b"
              },
              {
                "type": "text",
                "properties": {
                  "content": {
                    "slot": {
                      "name": "desc"
                    }
                  },
                  "style": {
                    "textStyle": {
                      "styleName": "body_small"
                    }
                  },
                  "color": {
                    "color": {
                      "color": "secondary_text"
                    }
                  },
                  "max_lines": {
                    "numberVal": {
                      "value": 1
                    }
                  },
                  "overflow": {
                    "stringVal": {
                      "value": "ellipsis"
                    }
                  }
                },
                "editorId": "e4b0dfca-6c99-492f-992f-ed4d00b693d3"
              }
            ],
            "editorId": "73247ca3-f743-4d36-a1e7-1f6a96be3d55"
          },
          {
            "type": "switch",
            "properties": {
              "value": {
                "slot": {
                  "name": "value"
                }
              },
              "active_color": {
                "color": {
                  "color": "primary_text"
                }
              }
            },
            "editorId": "7c75ae73-5d1f-442f-af9c-b3d282530566"
          }
        ],
        "editorId": "582ded7b-b526-4dff-b2a3-bc9ac00e51e1"
      }
    },
    {
      "name": "input_group",
      "root": {
        "type": "column",
        "properties": {
          "cross_align": {
            "align": {
              "named": "start"
            }
          },
          "spacing": {
            "stringVal": {
              "value": "xs"
            }
          },
          "expanded": {
            "expanded": {
              "enabled": true,
              "flex": 1
            }
          }
        },
        "children": [
          {
            "type": "text",
            "properties": {
              "content": {
                "slot": {
                  "name": "label"
                }
              },
              "style": {
                "textStyle": {
                  "styleName": "label_small"
                }
              },
              "color": {
                "color": {
                  "color": "secondary_text"
                }
              },
              "font_weight": {
                "numberVal": {
                  "value": 600
                }
              }
            },
            "editorId": "0955905f-72d5-437a-9f62-5b5932505b79"
          },
          {
            "type": "textfield",
            "properties": {
              "value": {
                "slot": {
                  "name": "value"
                }
              },
              "hint": {
                "slot": {
                  "name": "hint"
                }
              },
              "filled": {
                "boolVal": {
                  "value": true
                }
              },
              "bg": {
                "color": {
                  "color": "#00000005"
                }
              },
              "radius": {
                "radius": {
                  "topLeft": 0,
                  "topRight": 0,
                  "bottomLeft": 0,
                  "bottomRight": 0,
                  "token": "md"
                }
              },
              "border": {
                "border": {
                  "width": 1,
                  "color": "#00000010"
                }
              }
            },
            "editorId": "be008cb0-1799-4703-a6ef-88de9075d898"
          }
        ],
        "editorId": "445ac57d-dc63-408d-995c-9c68641ff99d"
      }
    }
  ]
}
```