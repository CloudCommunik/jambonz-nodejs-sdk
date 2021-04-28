import { DataObject } from "../utils";

export class BaseVerb {
  
  private verb: string;

  constructor(verb: 'conference' | 'dequeue' | 'dial' | 'dialogflow' | 'enqueue' | 'gather' | 'hangup' | 'leave' | 'lex' | 'listen' | 'pause' | 'play' | 'redirect' | 'say' | 'tag' | 'transcribe', data?: DataObject<BaseVerb>) {
    this.verb = verb
    if (data) Object.assign(this, data)
  }
}