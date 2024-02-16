export default function UserCard({ user }) {
  const {
    avatar_url,
    name,
    html_url,
    followers,
    following,
    public_repos,
    bio,
    login,
  } = user;

  return (
    <div className="github-user-card">
      <div>
        <img src={avatar_url} className="github-avatar" alt="user avatar" />
      </div>
      <div>
        <a href={html_url}>{login}</a>
      </div>
    </div>
  );
}
