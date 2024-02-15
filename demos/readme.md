# Demos

Two types of Demos available:

- Isolated Demos located in `/app/demos/samples/<DEMOFOLDER>` of the corresponding module
- Demos build-in to the `demo-app`

The `demo-app` consists of `app.component.html` that defines the base structure and `primary router-outlet`. Subsequent routes are loaded into the outlet.

![app.component](_images/app.component.html.png)

`/app/demos/demo-container/demo-container.html` defines a `left-menu` and a `nested router-outlet` where the individual isolated demos will be displayed.

![demo-container.component](_images/demo-container.png)

> Note: If you find any errors or have any suggestions, please create an issue on this repo

## Topics covered in the class

### Angular Introduction & Setup

- What is a Single Page Application? – SPA
- Tooling: Node.js, npm and Workspace requirements
- Angular Introduction
- Angular Technology Stack
- Angular Essentials & CLI
- Debugging Angular
- Introduction to the Demo App
- Maintaining & Updating projects
- Introduction to the Demo App

### TypeScript Fundamentals

- TypeScript Overview, ECMA Script Standards
- Configuration, Debugging, ES Lint
- Types, Variables, Literal Types, Functions
- Objects, Classes, Interfaces
- ECMA Script 6+ Essentials Util Functions
- 3rd Party Libraries & Type Definitions
- Async Operations, Promises 
- Observables & Signals

### Fundamentals & Completing Basic Tasks

- Modules vs Standalone Components
- Components & Dependency Injection
- Bootstrapping process and Configuration 
- Services & Data Request
- Imperative vs Reactive Programming Styles
- Expressions, Templates & Directives
- String Interpolation, Property- & Event-Binding, Two-Way Binding
- Data binding Observables & Signals
- Control Flow Syntax
- Custom Pipes & Localization
- Custom Directives & Pipes

### Nesting Components

- Splitting the UI to Nested Components
- Container vs Presentational Components
- Data binding & Events with Nested Components using @Input & @Output
- Using Input Signals
- Reusable Components using Local References & Content Projection
- View Child, View Children & Signal Based Queries

### Routing & Modularity

- Routing Basics
- Working with Parameterized Routes
- Component Input Bindings
- Organizing Angular Applications using Modules
- Module Types (Root, Feature, Shared, ...)
- Lazy Loading of Components and Modules
- Route Guards & Data Preloading

### Designing the User Interface

- Implementing a CSS Reset
- Global & Component Styles
- Using Sass (Synthetically Awesome Stylesheets)
- Layout using Flexbox, CSS Grid and Areas
- Responsive Web Design using Media Queries
- Angular Material Overview
- Using Material Component schematics
- Material Theming Colors
- Using Material Tables, Dialogs & Form Controls
- Using Angular CDK & 3rd Party Components (Charting, File Upload, Drag & Drop)

### Forms Design & Validation

- Forms Introduction
- Template Driven Forms vs Reactive (Model Based) Forms
- Using Forms Builder
- Typed Forms (Nullability, Nested Objects, Arrays)
- FormControl, FormGroups & FormArrays
- Form Validation Basics (Synchronous / Asynchronous)
- Custom- & Code-Based Validators

### Introduction to Reactive Programming using Signals & RxJS

- What is Reactive Programming / Benefits
- Observable, Observer & Subject
- Creating Observables & Casting to Observables
- Using the async pipe
- Capturing Mouse & DOM Events as Observables
- Subscribing to Routes & Params as Observables
- Using Common RxJS Operators
- Signals, Calculated Signals & Effects

### Managing State & Sharing Events

- What is State Management
- State Management Options: Signals vs Observables
- Stateless & Stateful Services
- Sharing Data between deeply Nested Components
- Service Bus & Sharing Events between deeply Nested Components


### Testing Basics

- Unit Tests vs Integration Tests
- Karma & Jasmine Basics
- Test Setup & Mocking Data
- Testing Classes, Directives and Pipes
- Using Mocks & Spies
- Intro to Component DOM Testing: Testbed and Testing Module
- Testing Component Interaction (Read, Write, Emit, Inputs)
- Material Testing using Component Harnesses
- In Short: End to End Testing using Cypress

### Securing & Publishing Angular

- Authentication / Authorization Basics in Spa’s
- Token based Auth: Understanding Jwt, OAuth 2.0 & OpenID Connect
- Observe Response and Setting Custom Http Headers
- Using Interceptors to Automate Authentication Tokens
- Securing Angular Routes using Route Guards
- Hosting Option Overview (Docker, Firebase, Azure Static Web App, …)
- Publishing Angular Apps
