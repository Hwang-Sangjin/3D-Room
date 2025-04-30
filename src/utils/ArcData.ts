import url from "../constants/url";

export class ArcData {
  private static domain: string = "";

  public static async setDomainFromJson() {
    ArcData.domain = url.MART_API_URL;
  }

  /**
   * ArcData 도메인을 반환한다.
   *
   */
  public static getDomain(): string {
    return ArcData.domain;
  }

  /**
   * ArcData에서 특정 매물의 데이터(3D 모델, 텍스쳐 등)에 접근하기 위한 URL을 반환한다.
   *
   * @param ID - 매물의 ID
   *
   * @note
   * - <span style="color:#D13100">부동산의 매물 ID와 데이터를 연결하는 작업이 완료되지 않아 현재는 임시로 등록해둔 매물 이름(string)을 사용중입니다. 추후 업데이트 하겠습니다.</span>
   *
   */
  public static async getSceneURL(ID: string): Promise<string> {
    return ArcData.domain + ID + "/scene";
  }

  /**
   * ArcData에서 특정 매물의 메타 데이터에 접근하기 위한 URL을 반환한다.
   * 메타 데이터는 단일 파일인 scene.json으로 관리 되고 있으며 scene을 구성하는 하위 오브젝트의 변환을 위한 matrix 등을 담고 있다.
   *
   * @param ID - 매물의 ID
   */
  public static async getSceneInfoURL(ID: string): Promise<string> {
    let sceneURL = await ArcData.getSceneURL(ID);

    return sceneURL + "/scene.json?" + Date.now().toString();
  }
}
