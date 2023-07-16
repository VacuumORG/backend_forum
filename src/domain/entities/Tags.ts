import * as crypto from 'node:crypto';

interface TagProps {
  name: string;
  categoryId: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Tag {
  private props: TagProps;
  private _id: string;

  constructor(props: TagProps, id?: string) {
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
      updatedAt: new Date(),
    };
    this._id = id ?? crypto.randomUUID();
  }

  get id(): string {
    return this._id;
  }

  set name(name: string) {
    this.props.name = name;
  }
  get name(): string {
    return this.props.name;
  }

  set categoryId(categoryId: string) {
    this.props.categoryId = categoryId;
  }
  get categoryId(): string {
    return this.props.categoryId;
  }

  get updatedAt(): Date {
    return this.props.updatedAt;
  }
  set updatedAt(updatedAt: Date) {
    this.props.updatedAt = updatedAt;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }
}
