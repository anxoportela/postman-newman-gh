---
sidebar_position: 3
title: Episodes API
description: Complete guide to the Rick and Morty Episodes API
---

# 🟣 Episodes API

The Episodes API provides access to all episodes from the Rick and Morty series.

## 📡 Endpoints

### Get All Episodes

```
GET https://rickandmortyapi.com/api/episode
```

**Query Parameters:**

| Parameter | Type | Description | Example |
|-----------|------|-------------|---------|
| `page` | integer | Page number | `?page=2` |
| `name` | string | Filter by name | `?name=pilot` |
| `episode` | string | Filter by code | `?episode=S01` |

### Get Episode by ID

```
GET https://rickandmortyapi.com/api/episode/{id}
```

**Example:**
```bash
curl https://rickandmortyapi.com/api/episode/1
```

### Get Multiple Episodes

```
GET https://rickandmortyapi.com/api/episode/[id1,id2,id3]
```

**Example:**
```bash
curl https://rickandmortyapi.com/api/episode/1,2,3
```

### Filter by Episode Code

```bash
curl "https://rickandmortyapi.com/api/episode?episode=S01E01"
```

## 📋 Response Schema

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

## 📺 Episode Code Format

Episodes follow the format `SxxExx`:

| Format | Description |
|--------|-------------|
| S | Season (01, 02, 03, etc.) |
| E | Episode (01, 02, 03, etc.) |

**Examples:**

| Code | Episode |
|------|---------|
| S01E01 | Pilot |
| S01E02 | Lawnmower Dog |
| S02E01 | A Rickle in Time |
| S03E01 | The Rickshank Rickdemption |

## ✅ Test Cases

Our comprehensive test suite validates:

| Test | Description |
|------|-------------|
| ✅ Status 200 | Verify successful response |
| ✅ Required fields | Episode has all required properties |
| ✅ Code format | Episode code matches SxxExx regex |
| ✅ Air date | Valid date string format |
| ✅ Episode filter | Filter by episode code works |
| ✅ Multiple IDs | Get multiple episodes by IDs |
| ✅ Sequential IDs | Sequential ID verification |

## 🎯 Test Count

- **Total Tests:** 24 assertions
- **Coverage:** Full endpoint coverage

## 📖 Related Documentation

- [Characters API](/characters)
- [Locations API](/locations)
- [Rick and Morty API Official Docs](https://rickandmortyapi.com/documentation)
