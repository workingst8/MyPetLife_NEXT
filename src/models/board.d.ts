import { ObjectId } from 'mongodb';

export interface Post {
    id: string;
    title: string;
    content: string;
    createdAt: string;
    author: string;
    profilePic: string;
    comments?: Comment[];
    likes: number;
    views: number;
  }

  export interface Comment {
    id: number;
    userId: number;
    boardId: number;
    parentId?: number | null;
    content: string;
    createdAt: string;
    order: number;
    author: string;
    profilePic: string;
    classNum?: number;
    groupNum?: number;
  }
  