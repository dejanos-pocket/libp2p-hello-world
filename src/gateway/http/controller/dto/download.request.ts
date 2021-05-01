import {error, ErrorCode} from "../../../exception/error.codes";
import Download, {DownloadStatus} from "../../../../models/download.model";

export interface DownloadRequest {
  remotePeerId: string;
  remoteFileId: number;
  override: boolean;
}

export function toEntity(payload: DownloadRequest): Download {
  if (!payload.remotePeerId || !payload.remoteFileId || payload.override == undefined) {
    throw error(ErrorCode.BAD_REQUEST);
  }

  const model = new Download();
  model.offset = 0;
  model.remotePeerId = payload.remotePeerId;
  model.remoteFileId = payload.remoteFileId;
  model.status = DownloadStatus.PENDING;

  return model;
}