import { BaseVerb } from "./base";

/**
 * The hangup command terminates the call and ends the application.
 *  https://docs.jambonz.org/jambonz/#hangup
 */
export class Hangup extends BaseVerb {

  /** an object containing SIP headers to include in the BYE request */
  headers!: Record<string,string> ; 

  constructor(data?: Partial<Hangup>) {
    super('hangup', data)
  }
}
