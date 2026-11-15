/**
 * Görev (Task) nesnesinin yapısı.
 *
 * @typedef {Object} Task
 * @property {number} id - Göreve ait benzersiz kimlik
 * @property {string} text - Görev metni
 * @property {boolean} completed - Görev tamamlandı mı?
 */

/**
 * Verilen metinden yeni bir görev nesnesi oluşturur.
 *
 * @param {string} text - Görev metni
 * @returns {Task}
 */
export const createTask = (text) => ({
  id: Date.now(),
  text: text.trim(),
  completed: false,
});
