export class Area {

  id: number;
  name: string;
  countryCode: string;
  ensignUrl: string;

  static fromHttp(area: Area): Area {
    const newArea = new Area();
    newArea.id = area.id;
    newArea.name = area.name;
    newArea.countryCode = area.countryCode;
    newArea.ensignUrl = area.ensignUrl;
    return newArea;
  }

}
