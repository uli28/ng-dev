export const goodvoucher = {
  ID: 2,
  Text: 'BP Tankstelle',
  Date: '2016-11-15T00:00:00',
  Amount: 40,
  Paid: false,
  Expense: false,
  Remark: true,
  Details: [
    {
      ID: 2,
      VoucherID: 3,
      Account: null,
      AccountID: 1,
      Text: 'USB Stick',
      Amount: 11,
      Comment: null,
    },
    {
      ID: 7,
      VoucherID: 3,
      AccountID: 6,
      Account: null,
      Text: 'Game of Thrones, Season 6',
      Amount: 29,
      Comment: null,
    },
  ],
};

export const badvoucher = {
  ID: 2,
  Text: 'BP Tankstelle',
  Date: '2016-11-15T00:00:00',
  Amount: 650,
  Paid: false,
  Expense: false,
  Remark: true,
  Details: [
    {
      ID: 2,
      VoucherID: 3,
      AccountID: 1,
      Account: null,
      Text: 'USB Stick',
      Amount: 11,
      Comment: null,
    },
    {
      ID: 7,
      VoucherID: 3,
      AccountID: 6,
      Account: null,
      Text: 'Game of Thrones, Season 6',
      Amount: 55,
      Comment: null,
    },
  ],
};

export const nullVoucher = {
  ID: 2,
  Text: 'BP Tankstelle',
  Date: '2016-11-15T00:00:00',
  Amount: 650,
  Paid: false,
  Expense: false,
  Remark: true,
  Details: null,
};
