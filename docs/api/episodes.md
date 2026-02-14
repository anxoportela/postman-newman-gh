---
sidebar_position: 3
---

# Episodes API

The Episodes API provides access to all episodes from the Rick and Morty series.

## Endpoints

### Get All Episodes

```
GET https://rickandmortyapi.com/api/episode
```

**Parameters:**
- `page` (optional): Page number for pagination
- `name` (optional): Filter by episode name
- `episode` (optional): Filter by episode code (e.g., S01E01)

### Get Episode by ID

```
GET https://rickandmortyapi.com/api/episode/{id}
```

### Get Multiple Episodes

```
GET https://rickandmortyapi.com/api/episode/{id1,id2,id3}
```

### Filter by Episode Code

```bash
curl "https://rickandmortyapi.com/api/episode?episode=S01E01"
```

## Response Schema

```json
{
  "id": 1,
  "name": "Pilot",
  "air_date": "December 2, 2013",
  "episode": "S01E01",
  "characters": [
    "https://rickandmortyapi.com/api/character/1",
    "https://rickandmortyapi.com/api/character/2"
  ],
  "url": "https://rickandmortyapi.com/api/episode/1",
  "created": "2017-11-04T18:48:46.250Z"
}
```

## Episode Code Format

Episodes follow the format `SxxExx`:
- S = Season (01, 02, 03, etc.)
- E = Episode (01, 02, 03, etc.)

Examples:
- S01E01 - Pilot
- S01E02 - Lawnmower Dog
- S02E01 - A Rickle in Time

## Test Cases

Our test suite validates:
- ✅ Status code 200 OK
- ✅ Episode has required fields
- ✅ Episode code format validation (SxxExx regex)
- ✅ Air date is valid date string
- ✅ Filter by episode code works
- ✅ Get multiple episodes by IDs
- ✅ Sequential ID verification
