
import { Fragment, useState } from 'react';
import { SkillBadge } from './SkillBadge.jsx';

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
  fullName = 'Tran Vinh Khiem',
  role = 'Senior Systems Architect • UIT S3T',
  avatarUrl = 'https://placehold.co/64x64/png?text=Avatar',
  metrics = defaultMetrics,
  skills = defaultSkills,
}) {
    const [imageFailed, setImageFailed] = useState(false);
const initials = getInitials(fullName);
  return (
    <article aria-labelledby="dev-heading">
      <header>
       {imageFailed ? (
  <span
    role="img"
    aria-label={`${fullName} avatar`}
  >
    {initials}
  </span>
) : (
  <img
    src={avatarUrl}
    alt={`${fullName} avatar`}
    width="64"
    height="64"
    onError={() => setImageFailed(true)}
  />
)}

        <hgroup>
          <h2 id="dev-heading">{fullName}</h2>
          <p>{role}</p>
        </hgroup>
      </header>

      <dl>
        {Object.entries(metrics).map(([key, value]) => (
          <Fragment key={key}>
            <dt>{key}</dt>
            <dd>{value}</dd>
          </Fragment>
        ))}
      </dl>

      <ul aria-label="Engineered Skills">
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
