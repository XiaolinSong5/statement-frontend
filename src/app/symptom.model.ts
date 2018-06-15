export class Symptom {
  code: number;
  name: string;

  /**
   * @description priority for drop down select in HTML. The higher the number, the higher the priority.
   * @type {number}
   */
  priority: number;

  static instance(name: string, priority: number): Symptom {
    const symptom = new Symptom;
    symptom.name = name;
    symptom.priority = priority;
    return symptom;
  }
}
