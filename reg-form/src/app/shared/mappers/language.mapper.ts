import { LanguageDTO } from '../interfaces/language-interface';

export function mapLanguages(resource: LanguageDTO) {
  return resource.languages;
}
