/**
 * Q++RS Code Studio - languages.js
 * Author: Jonathan Sherman
 * Copyright © 2025 Jonathan Sherman. All Rights Reserved.
 * Created by: Jonathan Sherman
 */

/**
 * Q++RS Code Studio - Languages API
 */

const SUPPORTED_LANGUAGES = [
  'JavaScript', 'Python', 'Java', 'C++', 'C#', 'Ruby', 'Go', 'Rust',
  'Swift', 'Kotlin', 'TypeScript', 'PHP', 'Perl', 'Scala', 'Haskell',
  'Lua', 'R', 'MATLAB', 'Julia', 'Dart', 'Elixir', 'Clojure', 'F#',
  'Objective-C', 'Shell', 'PowerShell', 'SQL', 'HTML', 'CSS', 'XML',
  'JSON', 'YAML', 'Markdown', 'Assembly', 'COBOL', 'Fortran', 'Ada'
];

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const response = {
    count: SUPPORTED_LANGUAGES.length,
    languages: SUPPORTED_LANGUAGES,
    categories: {
      'Web': ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'PHP'],
      'Systems': ['C++', 'C#', 'Rust', 'Go', 'Assembly'],
      'Data Science': ['Python', 'R', 'MATLAB', 'Julia'],
      'Mobile': ['Swift', 'Kotlin', 'Dart', 'Objective-C'],
      'Functional': ['Haskell', 'Scala', 'Clojure', 'F#', 'Elixir'],
      'Scripting': ['Python', 'Ruby', 'Perl', 'Shell', 'PowerShell']
    },
    platform: 'Vercel'
  };

  res.status(200).json(response);
};

