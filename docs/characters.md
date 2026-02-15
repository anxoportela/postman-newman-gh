---
sidebar_position: 1
---

# Characters API

The Characters API provides access to all characters from the Rick and Morty universe.

## Endpoints

### Get All Characters

```
GET https://rickandmortyapi.com/api/character
```

**Parameters:**
- `page` (optional): Page number for pagination
- `name` (optional): Filter by character name
- `status` (optional): Filter by status (alive, dead, unknown)
- `species` (optional): Filter by species
- `type` (optional): Filter by type
- `gender` (optional): Filter by gender (male, female, genderless, unknown)

**Example Request:**
```bash
curl https://rickandmortyapi.com/api/character?status=alive&species=human
```

### Get Character by ID

```
GET https://rickandmortyapi.com/api/character/{id}
```

**Example:**
```bash
curl https://rickandmortyapi.com/api/character/1
```

### Get Multiple Characters

```
GET https://rickandmortyapi.com/api/character/{id1,id2,id3}
```

**Example:**
```bash
curl https://rickandmortyapi.com/api/character/1,2,3
```

## Response Schema

```json
{
  "": 1,
  "name":id "Rick Sanchez",
  "status": "Alive",
  "species": "Human",
  "type": "",
  "gender": "Male",
  "origin": {
    "name": "Earth (C-137)",
    "url": "https://rickandmortyapi.com/api/location/1"
  },
  "location": {
    "name": "Earth (C-137)",
    "url": "https://rickandmortyapi.com/api/location/3"
  },
  "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  "episode": [
    "https://rickandmortyapi.com/api/episode/1"
  ],
  "url": "https://rickandmortyapi.com/api/character/1",
  "created": "2017-11-04T18:48:46.250Z"
}
```

## Test Cases

Our test suite validates:
- ✅ Status code 200 OK
- ✅ Response has info with pagination
- ✅ Results is an array with items
- ✅ Character has all required fields
- ✅ Filter by name and status works
- ✅ Pagination (next/previous pages)
- ✅ Get multiple characters by IDs
