import * as crypto from 'node:crypto';

interface UserProps {
  email: string;
  name: string;
  password: string;
  avatar_url?: string | null;
  createdAt?: Date;
  updatedAt?: Date;
}

export class User {
  private props: UserProps;
  private _id: string;

  constructor(props: UserProps) {
    this.props = {
      ...props,
      avatar_url: props.avatar_url ?? null,
      createdAt: props.createdAt ?? new Date(),
      updatedAt: new Date(),
    };
    this._id = crypto.randomUUID();
  }

  get id(): string {
    return this._id;
  }

  set email(email: string) {
    this.props.email = email;
  }
  get email(): string {
    return this.props.email;
  }

  set name(name: string) {
    this.props.name = name;
  }
  get name(): string {
    return this.props.name;
  }

  set password(password: string) {
    this.props.password = password;
  }
  get password(): string {
    return this.props.password;
  }

  set avatar_url(avatar_url: string | null) {
    this.props.avatar_url = avatar_url;
  }
  get avatar_url(): string | null {
    return this.props.avatar_url;
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
