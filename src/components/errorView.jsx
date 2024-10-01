
export const ErrorView  = (error)=>{
    return (<>
        <div className="alert alert-danger" role="alert">
            <p>Ocurrió un error: {error}</p>
            <button className="btn btn-primary">
            Intentar de nuevo
            </button>
        </div>
      </>)
}