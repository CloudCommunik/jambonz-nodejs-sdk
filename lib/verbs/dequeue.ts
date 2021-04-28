import { Hook } from "../utils";
import { BaseVerb } from "./base";
/**
 * The enqueue command is used to place a caller in a queue.
 * https://docs.jambonz.org/jambonz/#dequeue
 */
export class Dequeue extends BaseVerb {

  /** name of the queue	*/
  name!: string;

  /** A webhook invoke when call ends. If no webhook is provided, 
   * execution will continue with the next verb in the current application.
   */
   actionHook?: string | Hook ;

  /** A webhook for an application to run on the callee's end before the call is bridged. 
   * This will allow the application to play an informative message to a caller 
   * as they leave the queue (e.g. "your call may be recorded")
	 */
  confirmHook?: string | Hook;
  
  /**
   * if true, play a beep tone to this caller only just prior to connecting the queued call;
   *  this provides an auditory cue that the call is now connected	
   */
  beep?: boolean;


  /** number of seconds to wait on an empty queue 
   * before returning (default: wait forever)	
  */
  timeout?: number

  constructor(data?: Partial<Dequeue>) {
    super('dequeue', data)
  }
}
