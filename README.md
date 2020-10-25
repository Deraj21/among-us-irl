# Among us IRL <!-- omit in toc -->
Web app that handles an in-person game of "Among Us"

[Requirements in JIRA](https://jared-tanner.atlassian.net/secure/RapidBoard.jspa?rapidView=2&view=planning.nodetail&selectedIssue=AUI-20&epics=visible&issueLimit=100)


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

---
## Todo List
- [x] get requirements into jira
  - [x] work out MVP and subsequent sprints
- [x] plan out basic data model (to come back to later)
- [ ] design app in Adobe XD (leave room for possible features)
  - [ ] landing page
  - [ ] Host pages
  - [ ] player pages
- [ ] Based on the design, decide what React features to use (redux, hooks, router etc...)
- [x] create-react-app for front end
  - [ ] get file structure up
- [ ] create landing page (choose host or player)
- [ ] create host pages
  - [ ] main page (before game starts)
  - [ ] task management page
  - [ ] in-game page
- [ ] create player pages
  - [ ] lobby page (before game starts)
  - [ ] in-game page (view & complete tasks)
- [ ] create database
  - [ ] tasks table
- [ ] create back end server
  - [ ] read
  - [ ] write
  - [ ] update
  - [ ] delete
- [ ] connect back end to front end
- [ ] figure out how to get different instances of the app to talk to each other via the game id
  - [ ] ...



