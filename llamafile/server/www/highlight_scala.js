// Copyright 2024 Mozilla Foundation
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const SCALA_KEYWORDS = new Set([
  'abstract',
  'case',
  'catch',
  'class',
  'def',
  'do',
  'else',
  'extends',
  'final',
  'finally',
  'for',
  'forSome',
  'if',
  'implicit',
  'import',
  'lazy',
  'macro',
  'match',
  'new',
  'object',
  'override',
  'package',
  'private',
  'protected',
  'return',
  'sealed',
  'super',
  'this',
  'throw',
  'trait',
  'try',
  'type',
  'val',
  'var',
  'while',
  'with',
  'yield',
]);

class HighlightScala extends Highlighter {

  constructor(delegate) {
    super(delegate);
  }

  feed(input) {
    this.append(input);
  }

  flush() {
    this.delegate.flush();
  }
}

Highlighter.REGISTRY['scala'] = HighlightScala;
Highlighter.REGISTRY['sbt'] = HighlightScala;
Highlighter.REGISTRY['sc'] = HighlightScala;