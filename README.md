# Node.js Server: Handling EADDRINUSE Error

This repository demonstrates a common error encountered when running Node.js servers and provides a robust solution.

## The Problem

Attempting to start a server on a port that is already in use results in an `EADDRINUSE` error. This typically happens if another process is already using the port or if the server was previously terminated improperly, leaving the port occupied.

## The Solution

The solution involves using a `try...catch` block and implementing a retry mechanism with exponential backoff.  This ensures the server will attempt to start on the port until it becomes available, avoiding immediate failure.

## Getting Started

1. Clone this repository.
2. Run `npm install` to install any necessary dependencies (though none are required for this example).
3. Run `node bug.js` to reproduce the error (if port 8080 is already in use).
4. Run `node bugSolution.js` to see the implemented solution in action.