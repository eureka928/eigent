// ========= Copyright 2025-2026 @ Eigent.ai All Rights Reserved. =========
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
// ========= Copyright 2025-2026 @ Eigent.ai All Rights Reserved. =========

import { AnimatePresence, motion } from 'framer-motion';
import { LoaderCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type DecompositionPhase =
  | 'thinking'
  | 'preparing'
  | 'understanding'
  | 'planning'
  | 'decomposing'
  | null;

interface DecompositionStatusProps {
  phase: DecompositionPhase;
}

export function DecompositionStatus({ phase }: DecompositionStatusProps) {
  const { t } = useTranslation();

  if (!phase) return null;

  return (
    <div className="flex items-center gap-2 py-2 pl-sm">
      <LoaderCircle size={14} className="animate-spin text-icon-information" />
      <AnimatePresence mode="wait">
        <motion.span
          key={phase}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.2 }}
          className="text-xs font-medium text-text-secondary"
        >
          {t(`layout.decomposition-${phase}`)}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
