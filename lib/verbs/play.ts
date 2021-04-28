import { BaseVerb } from "./base";

/**
 * The play command is used to stream recorded audio to a call.
 * https://docs.jambonz.org/jambonz/#play
 */
export class Play extends BaseVerb {

  /** a single url or array of urls (will play in sequence) to a wav or mp3 file	 */
  url!: string;

  /** number of times to play the url(s)
   * (default: 1) 
  	 */
  loop?: number = 1;

  /** if true and the call has not yet been answered, play the audio without answering call.
   *  Defaults to false	 */
  earlyMedia?: boolean = false;

  constructor(data?: Partial<Play>) {
    super('play', data)
  }
}
