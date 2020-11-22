const dummyData = [
  {
    title: "Johnson v. Rogers",
    tasks: ["get docs", "call clients", "prepare litigation"],
    status: "in progress",
    folders: [
      {
        folderId: "1",
        title: "folder 1",
        files: [
          { fileId: "file-1", title: "clientinfo.txt" },
          { fileId: "file-2", title: "defendantinfo.txt" },
        ],
      },
      {
        folderId: "2",
        title: "folder 2",
        files: [
          {
            fileId: "file-3",
            title: "logo.png",
          },
        ],
      },
      {
        folderId: "3",
        title: "folder 3",

        files: [
          {
            fileId: "file-4",
            title: "stats.csv",
          },
        ],
      },
    ],
    hearingInformation: {
      hearingType: "N/A",
      department: 'domestic',
      judge: 'Smith',
      date: '11/26/2020',
      time: '1100',
      address: '123 court way, LA California, 11111',
      dialInNumber: 3336667789,
    },
    depositionInformation: {
      deponent: 'deponent',
      date: "TBD",
      time: "TBD",
      address: '1133 justice st, LA California, 11111',
      zoomLink: "TBD",
    },
  },
];
export default dummyData;
