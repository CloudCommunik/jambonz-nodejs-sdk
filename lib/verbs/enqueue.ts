import { Hook } from "../utils";
import { BaseVerb } from "./base";
/**
 * The enqueue command is used to place a caller in a queue.
 * https://docs.jambonz.org/jambonz/#enqueue
 */
export class Enqueue extends BaseVerb {

  /** name of the queue	*/
  name!: string;

  /** A webhook invoke when operation completes. If a call is dequeued through the leave verb, the webook is immediately invoked.
   * If the call has been bridged to another party via the dequeue verb, then the webhook is invoked after both parties have disconnected.
   * If no webhook is provided, execution will continue with the next verb in the current application.
   * See below for specified request parameters. 
   * */
   actionHook?: string | Hook ;

  /** A webhook to invoke while the caller is in queue. 
   * The only allowed verbs in the application returned from this webhook are say, play, pause, and leave,
   * See below for additional request parameters
	 */
   waitHook?: string | Hook ;

  constructor(data?: Partial<Enqueue>) {
    super('enqueue', data)
  }
}
