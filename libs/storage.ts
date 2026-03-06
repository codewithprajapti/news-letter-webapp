import fs from "fs/promises";
import path from "path";

const commentsPath = path.join(process.cwd(), "libs/comments.json");
const likesPath = path.join(process.cwd(), "libs/likes.json");
const usersPath = path.join(process.cwd(), "libs/users.json");

let memoryComments: any[] = [];
let memoryLikes: any[] = [];
let memoryUsers: any[] = [];

export async function readComments() {
  if (process.env.NODE_ENV === "production") {
    return memoryComments;
  }

  const file = await fs.readFile(commentsPath, "utf-8");
  return JSON.parse(file);
}

export async function writeComments(comments: any[]) {
  if (process.env.NODE_ENV === "production") {
    memoryComments = comments;
    return;
  }

  await fs.writeFile(commentsPath, JSON.stringify(comments, null, 2));
}

export async function readLikes() {
  if (process.env.NODE_ENV === "production") {
    return memoryLikes;
  }

  const file = await fs.readFile(likesPath, "utf-8");
  return JSON.parse(file);
}

export async function writeLikes(likes: any[]) {
  if (process.env.NODE_ENV === "production") {
    memoryLikes = likes;
    return;
  }

  await fs.writeFile(likesPath, JSON.stringify(likes, null, 2));
}

export async function readUsers() {
  if (process.env.NODE_ENV === "production") {
    return memoryUsers;
  }

  const file = await fs.readFile(usersPath, "utf-8");
  return JSON.parse(file);
}

export async function writeUsers(users: any[]) {
  if (process.env.NODE_ENV === "production") {
    memoryUsers = users;
    return;
  }

  await fs.writeFile(usersPath, JSON.stringify(users, null, 2));
}
