export const mockGroupSingle = {
  conditions: [
    {
      common_name: 'Gastroenteritis',
      id: 'c_10',
      name: 'Gastroenteritis',
      probability: 0.3477
    },
    {
      common_name: 'Food poisoning',
      id: 'c_138',
      name: 'Food poisoning',
      probability: 0.2861
    },
    {
      common_name: 'Irritable bowel',
      id: 'c_142',
      name: 'Irritable bowel syndrome',
      probability: 0.2477
    },
    {
      common_name: 'Abdominal pain, unspecified',
      id: 'c_969',
      name: 'Abdominal pain, unspecified',
      probability: 0.1785
    },
    {
      common_name: 'Gastritis',
      id: 'c_515',
      name: 'Gastritis',
      probability: 0.1542
    },
    {
      common_name: 'Stomach ulcer',
      id: 'c_20',
      name: 'Peptic ulcer',
      probability: 0.1189
    }
  ],
  extras: {},
  question: {
    extras: {},
    items: [
      {
        choices: [
          {
            id: 'present',
            label: 'Yes'
          },
          {
            id: 'absent',
            label: 'No'
          },
          {
            id: 'unknown',
            label: "Don't know"
          }
        ],
        id: 's_1782',
        name: 'Mild'
      },
      {
        choices: [
          {
            id: 'present',
            label: 'Yes'
          },
          {
            id: 'absent',
            label: 'No'
          },
          {
            id: 'unknown',
            label: "Don't know"
          }
        ],
        id: 's_1783',
        name: 'Moderate'
      },
      {
        choices: [
          {
            id: 'present',
            label: 'Yes'
          },
          {
            id: 'absent',
            label: 'No'
          },
          {
            id: 'unknown',
            label: "Don't know"
          }
        ],
        id: 's_1195',
        name: 'Severe'
      }
    ],
    text: 'How strong is your abdominal pain?',
    type: 'group_single'
  },
  should_stop: false
};

export const mockSingle = {
  extras: {},
  question: {
    extras: {},
    items: [
      {
        choices: [
          {
            id: 'present',
            label: 'Yes'
          },
          {
            id: 'absent',
            label: 'No'
          },
          {
            id: 'unknown',
            label: "Don't know"
          }
        ],
        id: 's_1933',
        name: 'Hypertension, over 180 mmHg'
      }
    ],
    text:
      'Was your systolic pressure greater than 180 mmHg, or diastolic pressure greater than 120 mmHg?',
    type: 'single'
  },
  conditions: [
    {
      common_name: 'Chronic venous insufficiency',
      id: 'c_84',
      name: 'Chronic venous insufficiency',
      probability: 0.6648
    },
    {
      common_name: 'Dilated cardiomyopathy',
      id: 'c_759',
      name: 'Dilated cardiomyopathy',
      probability: 0.3285
    },
    {
      common_name: 'Chronic kidney disease',
      id: 'c_180',
      name: 'Chronic kidney disease',
      probability: 0.2801
    },
    {
      common_name: 'Nephrotic syndrome',
      id: 'c_265',
      name: 'Nephrotic syndrome',
      probability: 0.2738
    },
    {
      common_name: 'Right-sided heart failure',
      id: 'c_572',
      name: 'Right-sided heart failure',
      probability: 0.2701
    },
    {
      common_name: 'Henoch-Schönlein purpura',
      id: 'c_463',
      name: 'Henoch-Schönlein purpura',
      probability: 0.1579
    },
    {
      common_name: 'Biventricular heart failure',
      id: 'c_612',
      name: 'Biventricular heart failure',
      probability: 0.1574
    }
  ],
  should_stop: false
};

export const mockGroupMultiple = {
  question: {
    type: 'group_multiple',
    text: 'Do you experience any of the following problems with breathing?',
    items: [
      {
        id: 's_2075',
        name: 'Sudden difficulty breathing or shortness of breath',
        choices: [
          { id: 'present', label: 'Yes' },
          { id: 'absent', label: 'No' },
          { id: 'unknown', label: "Don't know" }
        ]
      },
      {
        id: 's_2076',
        name: 'Rapid and shallow breathing, wheezing or bluish skin coloration',
        choices: [
          { id: 'present', label: 'Yes' },
          { id: 'absent', label: 'No' },
          { id: 'unknown', label: "Don't know" }
        ]
      }
    ],
    extras: {}
  },
  conditions: [
    {
      id: 'c_899',
      name: 'Cervical acceleration-deceleration syndrome',
      common_name: 'Whiplash injury',
      probability: 0.9179
    },
    {
      id: 'c_49',
      name: 'Migraine',
      common_name: 'Migraine',
      probability: 0.4116
    },
    {
      id: 'c_563',
      name: 'Bacterial meningitis',
      common_name: 'Bacterial meningitis',
      probability: 0.1845
    }
  ],
  extras: {},
  should_stop: true
};
