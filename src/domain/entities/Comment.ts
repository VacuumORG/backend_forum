import { randomUUID } from 'node:crypto';
export interface CommentProps {
  content: string;
  userId: string;
  topicId: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Comment {
  private _id: string;
  private props: CommentProps;

  constructor(props: CommentProps, id?: string) {
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
      updatedAt: props.updatedAt ?? new Date(),
    };
    this._id = id ?? randomUUID();
  }
  public get id(): string {
    return this._id;
  }
  public set content(content: string) {
    this.props.content = content;
  }
  public get content(): string {
    return this.props.content;
  }
  public set userId(userId: string) {
    this.props.userId = userId;
  }
  public get userId(): string {
    return this.props.userId;
  }
  public set topicId(topicId: string) {
    this.props.topicId = topicId;
  }
  public get topicId(): string {
    return this.props.topicId;
  }
  public set updatedAt(updatedAt: Date) {
    this.props.updatedAt = updatedAt;
  }
  public get updatedAt(): Date {
    return this.props.updatedAt;
  }
  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
