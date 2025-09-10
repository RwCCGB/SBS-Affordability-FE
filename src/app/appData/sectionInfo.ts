
export interface Section {
    id: number;
    sectionTitle: string;
    percentageProgress: number;
  }

   export const sections : Section[]  =  [
        {
            id:0,
            sectionTitle:"Application Details",
            percentageProgress:20
        },
        {
            id:1,
            sectionTitle:"Income",
            percentageProgress:60
        },
        {
            id:2,
            sectionTitle:"Expenditure",
            percentageProgress:80
        },
        {
            id:3,
            sectionTitle:"Results",
            percentageProgress:100
        }
    ]

export function getSectionById(id: number) : Section | undefined{
    return sections.find((s) => s.id ===id);
}