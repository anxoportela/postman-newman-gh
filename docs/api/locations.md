---
sidebar_position: 2
---

# Locations API

The Locations API provides access to all locations from the Rick and Morty universe.

## Endpoints

### Get All Locations

```
GET https://rickandmortyapi.com/api/location
```

**Parameters:**
- `page` (optional): Page number for pagination
- `name` (optional): Filter by location name
- `type` (optional): Filter by type (Planet, Cluster, Space station, etc.)
- `dimension` (optional): Filter by dimension

### Get Location by ID

```
GET https://rickandmortyapi.com/api/location/{id}
```

### Filter Locations

```bash
curl "https://rickandmortyapi.com/api/location?type=planet&dimension=C-137"
```

## Response Schema

```json
{
  "id": 1,
  "name": "Earth (C-137)",
  "type": "Planet",
  "dimension": "Dimension C-137",
  "residents": [
    "https://rickandmortyapi.com/api/character/1",
    "https://rickandmortyapi.com/api/character/2"
  ],
  "url": "https://rickandmortyapi.com/api/location/1",
  "created": "2017-11-04T18:48:46.250Z"
}
```

## Location Types

- Planet
- Cluster
- Space station
- Microverse
- TV
- Resort
- Fantasy town
- Game
- Celestial
- Unknown
- Dimension
- Multiverse

## Test Cases

Our test suite validates:
- ✅ Status code 200 OK
- ✅ Response has info and results
- ✅ Location has required properties
- ✅ Filter by name, type, and dimension
- ✅ Chained requests with saved variables
