import { Fragment, useState } from 'react';
import { SkillBadge } from './SkillBadge.jsx';
import styles from './DeveloperCard.module.css';


const defaultMetrics = {
  commits: 512,
  vdomNodes: 0,
  a11yScore: 100,
};

const defaultSkills = [
  {
    id: 'sk-1',
    name: 'React 19 Fiber',
    tier: 'Core',
  },
  {
    id: 'sk-2',
    name: 'Semantic HTML',
    tier: 'Advanced',
  },
  {
    id: 'sk-3',
    name: 'Accessibility',
    tier: 'Advanced',
  },
];

function getInitials(fullName) {
  return fullName
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

export function DeveloperCard({
  fullName = 'Luong Quoc Dat',
  role = 'Senior Systems Architect • UIT S3T',
avatarUrl = 'https://placehold.co/64x64/png?text=Avatar',
  metrics = defaultMetrics,
  skills = defaultSkills,
}) {
  const [imageFailed, setImageFailed] = useState(false);
  const initials = getInitials(fullName);

  return (
    <article
      className={styles.card}
      aria-labelledby="dev-heading"
    >
      <header className={styles.header}>
        {imageFailed ? (
          <span
            className={styles.initials}
            role="img"
            aria-label={`${fullName} avatar`}
          >
            {initials}
          </span>
        ) : (
          <img
            className={styles.avatar}
            src={avatarUrl}
            alt={`${fullName} avatar`}
            width="64"
            height="64"
            onError={() => setImageFailed(true)}
          />
        )}

        <hgroup className={styles.identity}>
          <h2 id="dev-heading">{fullName}</h2>
          <p>{role}</p>
        </hgroup>
      </header>

      <dl className={styles.metrics}>
        {Object.entries(metrics).map(([key, value]) => (
          <Fragment key={key}>
            <dt>{key}</dt>
            <dd>{value}</dd>
          </Fragment>
        ))}
      </dl>

      <ul
        className={styles.skills}
        aria-label="Engineered Skills"
      >
        {skills.map((skill) => (
          <SkillBadge
            key={skill.id}
            name={skill.name}
            tier={skill.tier}
          />
        ))}
      </ul>
    </article>
  );
}