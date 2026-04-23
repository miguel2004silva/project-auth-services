import { useState } from 'react';

interface RegisterProps {
  onSwitch: () => void;
}

export function Register({ onSwitch }: RegisterProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const res = await fetch('/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Falha ao cadastrar');
      }

      setSuccess('Conta criada com sucesso! Você já pode entrar.');
      setEmail('');
      setPassword('');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-card">
      <div className="auth-header">
        <h2>Criar Conta</h2>
        <p>Junte-se a nós hoje para começar</p>
      </div>

      {error && <div className="alert error">{error}</div>}
      {success && <div className="alert success">{success}</div>}

      <form className="auth-form" onSubmit={handleRegister}>
        <div className="form-group">
          <label htmlFor="reg-email">E-mail</label>
          <input
            id="reg-email"
            type="email"
            placeholder="joao@exemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="reg-password">Senha</label>
          <input
            id="reg-password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="auth-button" disabled={loading}>
          {loading ? 'Criando conta...' : 'Cadastrar-se'}
        </button>
      </form>

      <div className="auth-footer">
        Já tem uma conta? 
        <button type="button" onClick={onSwitch}>
          Entrar
        </button>
      </div>
    </div>
  );
}
