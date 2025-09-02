
export interface Section {
    id: number;
    sectionTitle: string;
    percentageProgress: number;
  }

function GetSections(){

    const sections : Section[]  =  [
        {
            id:0,
            sectionTitle:"Application Details",
            percentageProgress:20
        },
        {
            id:1,
            sectionTitle:"About the Applicants",
            percentageProgress:40
        },
        {
            id:2,
            sectionTitle:"Income",
            percentageProgress:60
        },
        {
            id:3,
            sectionTitle:"Expenditure",
            percentageProgress:80
        },
        {
            id:4,
            sectionTitle:"Results",
            percentageProgress:100
        }
    ]

    return sections
}
export default {GetSections}