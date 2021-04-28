import { BaseVerb } from "./base";

/**
 * The leave verb transfers a call out of a queue. 
 * The call then returns to the flow of execution following the enqueue verb that parked the call, 
 * or the document returned by that verbs actionHook property, if provided.
 * https://docs.jambonz.org/jambonz/#leave
 */
 export class Leave extends BaseVerb {

  constructor(data?: Partial<Leave>) {
    super('leave', data)
  }
}