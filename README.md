# Among us IRL <!-- omit in toc -->
Web app that handles an in-person game of "Among Us"

[Requirements in JIRA](https://jared-tanner.atlassian.net/secure/RapidBoard.jspa?rapidView=2&view=planning.nodetail&selectedIssue=AUI-20&epics=visible&issueLimit=100)

[link for image assets](https://www.spriters-resource.com/pc_computer/amongus/sheet/139872/)

Adobe XD design is stored via Adobe creative cloud tied to personal email

---
## Front-end features needed
- react-router
- redux for...
  - game code?
- 

## Routes
- / - redirects to "/landing"
- /landing - LangingPage, LandingButtons
  - .../playerJoin - PlayerJoin
- /lobby - Lobby
  - .../host - HostLobby
  - .../host/settings - LobbySettings
  - .../host/tasks - HostTasks
  - .../player - PlayerLobby
- /game - GamePage
  - .../player - PlayerTasks
  - .../host - EmergencyButton

---
## Data Model
### Tasks table
- 
  | field name  | data type & info                 |
  | ----------- | -------------------------------- |
  | id          | string(16) not null              |
  | description | string(200)                      |
  | location    | string(50)                       |
  | type        | string(3) foreign key: TaskTypes |

### TaskTypes table
- 
  | field name | data type & info |
  | ---------- | ---------------- |
  | low        | string(3)        |
  | text       | string(10)       |
- 
  | low | text   |
  | --- | ------ |
  | srt | short  |
  | med | medium |
  | lng | long   |

### Settings Table
- 
  | field           | data type &info  |
  | --------------- | --------------- |
  | id              | string not null |
  | numImposters    | integer         |
  | numShortTasks   | integer         |
  | numLongTasks    | integer         |
  | killCooldownSec | integer         |


---
## Todo List
### Planning
- [x] get requirements into jira
  - [x] work out MVP and subsequent sprints
- [x] plan out basic data model (to come back to later)
- [x] design app in Adobe XD (leave room for possible features)
  - [x] landing page
  - [x] Host pages
  - [x] player pages
- [x] Based on the design, decide what React features to use (redux, hooks, router etc...)
- [x] research how to have apps talk to each other (host to players, players to host)
### Front-end
- [x] create-react-app for front end
  - [x] get file structure up
- [x] create landing page (choose host or player)
- [ ] create host pages (basically shells with dummy-data at this point)
  - [x] main page (before game starts)
  - [x] create settings page
  - [x] task management page
  - [ ] in-game page
- [ ] create player pages
  - [ ] lobby page (before game starts)
  - [ ] in-game page (view & complete tasks)
- [ ] implement redux, and hook up...
  - [ ] HOST
    - [ ] game code (from server)
    - [ ] settings
    - [ ] host tasks
    - [ ] player tasks
### Back-end
- [ ] create database
  - [ ] tasks table
  - [ ] tasktypes table
  - [ ] settings table
- [ ] create back end server
  - [ ] CRUD for tasks
  - [ ] request auth token for Ably
  - [ ] randomly assign tasks & send to each player
  - [ ] how many players are currently in game
  - [ ] create random code, and send to clients
  - [ ] player death endpoint
  - [ ] emergency meeting endpoint
  - [ ] report body endpoint
- [ ] connect back end to front end



