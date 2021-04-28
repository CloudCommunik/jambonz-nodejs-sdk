import { BaseVerb } from "./base";

/**
 * The say command is used to send synthesized speech to the remote party. The text provided may be either plain text or may use SSML tags.
 * https://docs.jambonz.org/jambonz/#say
 */
export class Say extends BaseVerb {

  /** text to speak; may contain SSML tags	 */
  text!: string

  /** the number of times a text is to be repeated; 0 means repeat forever. Defaults to 1. */
  loop: number = 1

  /** if true and the call has not yet been answered, play the audio without answering call. Defaults to false		 */
  earlyMedia: boolean = false
  
  /** 
   * @param synthesizer.vendor : speech vendor to use: Google or aws (polly is also an alias for aws)	
   * @param synthesizer.language : language code to use.	
   * @param synthesizer.gender : (Google only) MALE, FEMALE, or NEUTRAL.	
   * @param synthesizer.voice : voice to use. Note that the voice list differs whether you are using aws or Google. 
   * Defaults to application setting, if provided.	
   */
  synthesizer?: { vendor: string, language: string, gender: string, voice: string }
  
  constructor(data?: Partial<Say>) {
    super('say', data)
  }
}
