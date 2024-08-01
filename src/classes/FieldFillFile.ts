import FileInfo from '@/services/classes/FileInfo';
import ClassHelper from '@/services/ClassHelper';

export default class FieldFillFile {
  id?: string;
  answerId?: string;
  comment = '';
  fileInfoId?: string;
  fileInfo: FileInfo = new FileInfo();

  constructor(i?: FieldFillFile) {
    ClassHelper.BuildClass(this, i);
  }
}
