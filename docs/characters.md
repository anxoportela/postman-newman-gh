---
sidebar_position: 1
title: Characters API
description: Complete guide to the Rick and Morty Characters API
---

# 🔵 Characters API

The Characters API provides access to all characters from the Rick and Morty universe.

## 📡 Endpoints

### Get All Characters

```
GET https://rickandmortyapi.com/api/character
```

**Query Parameters:**

| Parameter | Type | Description | Example |
|-----------|------|-------------|---------|
| `page` | integer | Page number | `?page=2` |
| `name` | string | Filter by name | `?name=rick` |
| `status` | string | Filter by status | `?status=alive` |
| `species` | string | Filter by species | `?species=human` |
| `type` | string | Filter by type | `?type=ghost` |
| `gender` | string | Filter by gender | `?gender=male` |

**Example Request:**
```bash
curl "https://rickandmortyapi.com/api/character?status=alive&species=human"
```

### Get Character by ID

```
GET https://rickandmortyapi.com/api/character/{id}
```

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | integer | Character ID (1-826) |

**Example:**
```bash
curl https://rickandmortyapi.com/api/character/1
```

### Get Multiple Characters

```
GET https://rickandmortyapi.com/api/character/[id1,id2,id3]
```

**Example:**
```bash
curl https://rickandmortyapi.com/api/character/1,2,3
```

## 📋 Response Schema

```json
{
  "id": 1,
  "name": "Rick Sanchez",
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

## ✅ Test Cases

Our comprehensive test suite validates:

| Test | Description |
|------|-------------|
| ✅ Status 200 | Verify successful response |
| ✅ Pagination | Response includes info with next/prev pages |
| ✅ Array validation | Results is an array with items |
| ✅ Required fields | Character has all required fields |
| ✅ Name filter | Filter by name works correctly |
| ✅ Status filter | Filter by status works correctly |
| ✅ Pagination | Navigate between pages |
| ✅ Multiple IDs | Get multiple characters by IDs |

## 🎯 Test Count

- **Total Tests:** 30 assertions
- **Coverage:** Full endpoint coverage

## 📖 Related Documentation

- [Locations API](/locations)
- [Episodes API](/episodes)
- [Rick and Morty API Official Docs](https://rickandmortyapi.com/documentation)
