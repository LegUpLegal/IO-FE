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
      hearingInformation: {
        hearingType: "N/A",
        dialInNumber: 3336667789,
      },
      depostionInformation: {
        date: "TBD",
        time: "TBD",
        zoomLink: "TBD",
      },
    },
  },
];
export default dummyData;
